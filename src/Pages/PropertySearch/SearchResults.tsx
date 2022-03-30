import React from "react";
import parse from "html-react-parser";

// Components
import AlertInfo from "Components/Alerts/AlertInfo";
import AlertWarning from "Components/Alerts/AlertWarning";

// Models
import { ModuleProps, ModuleConfiguration } from "Models/Modules/SearchResultsConfiguration";

// Configuration
const configuration = {
    CustomMessages: {
        Address: "Address",
        Postcode: "Postcode",
        PropertyType: "Property type",
        SearchResults: "Search results",
        NumberOfRooms: "Number of rooms",
        SelectProperty: "Select property",
        ListOfProperties: "List of properties",
        FloorArea: "Floor area (m<sup>2</sup>)",
        NoPropertiesFound: "No properties found",
        HelpMessage: "Please provide an address before continuing"
    }
} as ModuleConfiguration;

export default class SearchResults extends React.Component <ModuleProps, unknown> {
    private BuildSearchResults = (): JSX.Element => {
        if (this.props.DisplayHelpMessage) {
            return (<AlertInfo Text={configuration.CustomMessages.HelpMessage}></AlertInfo>);
        }
        
        if (!this.props.IsProcessingSearch && !this.props.DisplayHelpMessage && this.props.Properties.length === 0) {
            return (<AlertWarning Text={configuration.CustomMessages.HelpMessage}></AlertWarning>);
        }

        const mappedSearchResults = this.props.Properties
            .map(({ Address, Postcode, PropertyType, NumberOfRooms, FloorArea }, index) => {
                const uniqueKey = `search-results-${index + 1}`;
                
                return (
                    <tr key={uniqueKey}>
                        <td className="text-center">
                            <input type="checkbox" className="width-auto" aria-label={configuration.CustomMessages.SelectProperty}></input>
                        </td>
                        <td className="text-center">{Address}</td>
                        <td className="text-center">{Postcode}</td>
                        <td className="text-center immo-sentence-case">{PropertyType}</td>
                        <td className="text-center">{NumberOfRooms}</td>
                        <td className="text-center">{FloorArea}</td>
                    </tr>
                );
            });

        return (
            <div className="table-responsive-md immo-bg-light-grey min-h-19">
                <table className="table">
                    <caption className="sr-only">{configuration.CustomMessages.ListOfProperties}</caption>
                    <thead>
                        <tr>
                            <th className="text-center">
                                <i className="fas fa-check"></i>
                                <span className="sr-only">{configuration.CustomMessages.SelectProperty}</span>
                            </th>
                            <th className="text-center">{configuration.CustomMessages.Address}</th>
                            <th className="text-center">{configuration.CustomMessages.Postcode}</th>
                            <th className="text-center">{configuration.CustomMessages.PropertyType}</th>
                            <th className="text-center">{configuration.CustomMessages.NumberOfRooms}</th>
                            <th className="text-center">{parse(configuration.CustomMessages.FloorArea)}</th>
                        </tr>
                    </thead>
                    <tbody>{mappedSearchResults}</tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h2 className="h5 mb-3">{configuration.CustomMessages.SearchResults}</h2>
                {this.BuildSearchResults()}
            </div>
        );
    }
}