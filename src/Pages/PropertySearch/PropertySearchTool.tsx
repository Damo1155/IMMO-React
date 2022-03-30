import React from "react";

// Api
import {
    fetchProperties, fetchPropertyDetails, getAvailablePropertyTypes,
    PropertyDetails, PropertyType
} from "TestDependencies/api";

// Models
import { MappedProperty, MappedPropertyBase } from "Models/Modules/PropertiesConfiguration";
import { ModuleState, ModuleConfiguration } from "Models/Modules/PropertySearchToolConfiguration";

// Components
import InputText from "Components/Inputs/InputText";
import SubmitAction from "Components/Buttons/SubmitAction";
import SearchResults from "Pages/PropertySearch/SearchResults";
import SelectedSearchResults from "Pages/PropertySearch/SelectedSearchResults";

// Services
import { IsValid } from "Services/Validation/ValidationService";
import {
    ToastProcessing, ToastValidationError, ToastError, ToastDestroy
} from "Services/Bootstrap/ToastService";

// Configuration
const configuration = {
    CustomMessages: {
        Search: "Search",
        Address: "Address",
        PropertyTypes: "Property types",
        LoadingProperties: "Loading properties",
        AddressRequired: "Please ensure an address has been provided"
    },
    Identifiers: {
        Address: "immo-address-search"
    }
} as ModuleConfiguration;

export default class PropertySearchTool extends React.Component <unknown, ModuleState> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            Properties: [],            
            PropertyTypes: [],
            SelectedProperties: [],
            DisplayHelpMessage: true,
            IsProcessingSearch: false
        }

        this.RetrievePropertyTypes();
    }

    private RetrievePropertyTypes = (): void => {
        getAvailablePropertyTypes()
            .then(({ propertyTypes }) => {
                propertyTypes.unshift({
                    label: "All",
                    value: undefined
                } as PropertyType);

                this.setState({ PropertyTypes: propertyTypes });
            });
    };

    private ProcessSearch = (event): void => {
        event.preventDefault();

        if (this.state.IsProcessingSearch) {
            return;
        }

        const fieldsToValidate = [
            configuration.Identifiers.Address
        ] as Array<string>;

        if (!IsValid(fieldsToValidate)) {
            ToastValidationError(configuration.CustomMessages.AddressRequired);

            return;
        }

        this.setState({
            Properties: [],
            IsProcessingSearch: true,
            DisplayHelpMessage: false
        });
        
        const address = "Alte";
        const propertyType = undefined;
        // const address = RetrieveValue(this.Identifiers.Address) as string;
        const toastIdentifier = ToastProcessing(configuration.CustomMessages.LoadingProperties);

        // Purpose  :   Some requests are being bubbled back up with an object rather than string.
        // const propertyType = (typeof type === "string" ? type : undefined) as string;

        fetchProperties({ address, propertyType })
            .then(({ properties }) => {
                const ids = properties.map((property) => property.id);

                this.RetrievePropertyDetails(ids, toastIdentifier);
            })
            .catch(() => {
                this.setState({ IsProcessingSearch: false });

                ToastError();
                ToastDestroy(toastIdentifier);
            });
    }

    private RetrievePropertyDetails = (ids: Array<string>, toastIdentifier: string): void => {
        const promises = [] as Array<Promise<{ property: PropertyDetails }>>;

        ids.forEach((id: string) => {
            promises.push(fetchPropertyDetails(id));
        });

        const selectedProperties = this.state.SelectedProperties;
        
        Promise.all(promises)
            .then((response) => {
                const mappedProperties =
                    response.map(({ property }) => {
                        const isSelected = selectedProperties
                            .some((selectedProperty: MappedPropertyBase) => selectedProperty.Id === property.id);

                        return {
                            Id: property.id,
                            IsSelected: isSelected,
                            Address: property.address,
                            Postcode: property.postcode,
                            FloorArea: property.floorArea,
                            PropertyType: property.propertyType,
                            NumberOfRooms: property.numberOfRooms
                        } as MappedProperty;
                    });

                this.setState({ Properties: mappedProperties });
            })
            .catch(() => {
                ToastError();
            })
            .finally(() => {
                ToastDestroy(toastIdentifier);
                
                this.setState({ IsProcessingSearch: false });
            });
    }

    private BuildPropertyTypes = (): JSX.Element => {
        const mappedPropertyTypes = this.state.PropertyTypes
            .map((propertyType: PropertyType, index: number) => {
                const uniqueKey = `property-type-${index + 1}`;

                return (
                    <li key={uniqueKey}>
                        <a href="#">{propertyType.label}</a>
                    </li>
                );
            });

        return mappedPropertyTypes.length > 0 ? (
            <div>
                <h2 className="h5 mb-3">{configuration.CustomMessages.PropertyTypes}</h2>

                <div className="immo-property-types">
                    <ul>{mappedPropertyTypes}</ul>
                </div>
            </div>
        ) : null;
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2" aria-hidden="true" role="presentation"></div>
                    <div className="col-md-10">
                        <form onSubmit={this.ProcessSearch} className="mb-3">
                            <h2 className="h5 mb-3">{configuration.CustomMessages.Search}</h2>

                            <div className="immo-search-group">
                                <InputText Text={configuration.CustomMessages.Address} FieldIdentifier={configuration.Identifiers.Address} 
                                           IsRequired={true} AsPlaceholder={true}></InputText>
                                <SubmitAction Text={configuration.CustomMessages.Search} IsProcessing={this.state.IsProcessingSearch}></SubmitAction>
                            </div>
                        </form>

                        <SelectedSearchResults SelectedProperties={this.state.SelectedProperties}></SelectedSearchResults>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-2">
                        {this.BuildPropertyTypes()}
                    </div>
                    <div className="col-md-10">
                        <SearchResults IsProcessingSearch={this.state.IsProcessingSearch} DisplayHelpMessage={this.state.DisplayHelpMessage}
                                       Properties={this.state.Properties}></SearchResults>
                    </div>
                </div>
            </div>
        );
    }
}