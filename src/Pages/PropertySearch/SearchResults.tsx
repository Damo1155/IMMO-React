import React from "react";

// Components
import AlertInfo from "Components/Alerts/AlertInfo";
import AlertWarning from "Components/Alerts/AlertWarning";

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <h2 className="h5 mb-3">Search Results</h2>
        {/* <h2 className="h5 mb-3">{{CustomMessages.SearchResults}}</h2> */}

        <AlertInfo></AlertInfo>
        <AlertWarning></AlertWarning>

        {/* IF DisplaySearchResults */}
        <div>
            <div className="table-responsive-md immo-bg-light-grey min-h-19">
            <table className="table">            
                <caption className="sr-only">List of properties</caption>
                {/* <caption className="sr-only">{{CustomMessages.ListOfProperties}}</caption> */}
                <thead>
                    <tr>
                        <th className="text-center">
                            <i className="fas fa-check"></i>
                            <span className="sr-only">
                              Select property
                            </span>
                        </th>
                        {/* 
                        <th className="text-center">
                            <i className="fas fa-check"></i>
                            <span className="sr-only">
                                {{CustomMessages.SelectProperty}}
                            </span>
                        </th>
                        */}
                        <th className="text-center">Address</th>
                        {/* <th className="text-center">{{CustomMessages.Address}}</th> */}
                        <th className="text-center">Postcode</th>
                        {/* <th className="text-center">{{CustomMessages.Postcode}}</th> */}
                        <th className="text-center">Property type</th>
                        {/* <th className="text-center">{{CustomMessages.PropertyType}}</th> */}
                        <th className="text-center">Number of rooms</th>
                        {/* <th className="text-center">{{CustomMessages.NumberOfRooms}}</th> */}
                        <th className="text-center">Floor area (m<sup>2</sup>)</th>                        
                        <th className="text-center" v-html="CustomMessages.FloorArea"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                        LOOP THROUGH PROPERTIES PROP
                        ENSURE KEY IS BOUND
                    */}
                    <tr>
                        <td className="text-center">
                            <input type="checkbox" className="width-auto" aria-label="Select property"></input>
                            {/* <input type="checkbox" className="width-auto" aria-label="CustomMessages.electProperty"></input> */}
                        </td>
                        <td className="text-center">TEXT</td>
                        {/* <td className="text-center">{{property.Address}}</td> */}
                        <td className="text-center">TEXT</td>
                        {/* <td className="text-center">{{property.Postcode}}</td> */}
                        <td className="text-center immo-sentence-case">TEXT</td>
                        {/* <td className="text-center immo-sentence-case">{{property.PropertyType}}</td> */}
                        <td className="text-center">TEXT</td>
                        {/* <td className="text-center">{{property.NumberOfRooms}}</td> */}
                        <td className="text-center">TEXT</td>
                        {/* <td className="text-center">{{property.FloorArea}}</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
      </div> 
    );
  }
}

export default SearchResults;