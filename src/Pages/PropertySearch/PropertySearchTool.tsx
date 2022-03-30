import React from "react";

// Components
import InputText from "Components/Inputs/InputText";
import SubmitAction from "Components/Buttons/SubmitAction";
import SearchResults from "Pages/PropertySearch/SearchResults";
import SelectedSearchResults from "Pages/PropertySearch/SelectedSearchResults";

class PropertySearchTool extends React.Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-md-2" aria-hidden="true" role="presentation"></div>
                <div className="col-md-10">
                    <form className="mb-3">
                        <h2 className="h5 mb-3">Search</h2>
                        {/* <h2 className="h5 mb-3">{{CustomMessages.Search}}</h2> */}

                        <div className="immo-search-group">
                            <InputText></InputText>
                            <SubmitAction></SubmitAction>
                        </div>
                    </form>

                    <SelectedSearchResults></SelectedSearchResults>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-2">
                    {/* IF HasPropertyTypes */}
                    <div>
                        <h2 className="h5 mb-3">Property type</h2>
                        {/* <h2 className="h5 mb-3">{{CustomMessages.PropertyTypes}}</h2> */}

                        <div className="immo-property-types">
                            <ul>
                                {/* LOOP ON ALL PROPERTY TYPES */}
                                <li>
                                    {/* CLICK EVENT */}
                                    <a href="#">Property Type Label</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    <SearchResults></SearchResults>
                </div>
            </div>
        </div>
    );
  }
}

export default PropertySearchTool;