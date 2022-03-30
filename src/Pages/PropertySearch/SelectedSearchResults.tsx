import React from "react";
import parse from "html-react-parser";

// Models
import { ModuleProps, ModuleConfiguration } from "Models/Modules/SelectedSearchResultsConfiguration";

// Configuration
const configuration = {
    CustomMessages: {
      Address: "Address",
      Postcode: "Postcode",
      NumberOfRooms: "Number of rooms",
      FloorArea: "Floor area (m<sup>2</sup>)",
      SelectedProperties: "Selected properties",
      ListOfSelectedProperties: "List of selected properties"
    }
} as ModuleConfiguration;

export default class SelectedSearchResults extends React.Component <ModuleProps, unknown> {
    private BuildSearchResults = (): JSX.Element => {
        const mappedSelectedResults = this.props.SelectedProperties
            .map(({ Address, Postcode, NumberOfRooms, FloorArea }, index) => {
                const uniqueKey = `search-results-${index + 1}`;
                
                return (
                    <tr key={uniqueKey}>
                        <td className="text-center">{Address}</td>
                        <td className="text-center">{Postcode}</td>
                        <td className="text-center">{NumberOfRooms}</td>
                        <td className="text-center">{FloorArea}</td>
                    </tr>
                );
            });

        return this.props.SelectedProperties.length > 0 ? (
            <div className="table-responsive-md immo-bg-light-grey min-h-19">
                <table className="table">
                  <caption className="sr-only">{configuration.CustomMessages.ListOfSelectedProperties}</caption>
                  <thead>
                      <tr>
                          <th className="text-center">{configuration.CustomMessages.Address}</th>
                          <th className="text-center">{configuration.CustomMessages.Postcode}</th>
                          <th className="text-center">{configuration.CustomMessages.NumberOfRooms}</th>
                          <th className="text-center">{parse(configuration.CustomMessages.FloorArea)}</th>
                      </tr>
                  </thead>
                  <tbody>{mappedSelectedResults}</tbody>
                </table>
            </div>
        ) : null;
    }

    render() {
        return (
            <div>
                <h2 className="h5 mb-3">{configuration.CustomMessages.SelectedProperties}</h2>
                {this.BuildSearchResults()}
            </div>
        );
    }
}