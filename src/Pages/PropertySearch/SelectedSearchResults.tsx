import React from "react";

class SelectedSearchResults extends React.Component {
  render() {
    return (
       <div>
         <h2 className="h5 mb-3">Selected properties</h2>
         {/* <h2 className="h5 mb-3">{{CustomMessages.SelectedProperties}}</h2> */}
         <div className="table-responsive-md immo-bg-light-grey min-h-9">
              <table className="table">
                  <caption className="sr-only">List of selected properties</caption>
                  {/* <caption className="sr-only">{{CustomMessages.ListOfSelectedProperties}}</caption> */}
                  <thead>
                      <tr>
                          <th className="text-center">Address</th>
                          {/* <th className="text-center">{{CustomMessages.Address}}</th> */}
                          <th className="text-center">Postcode</th>
                          {/* <th className="text-center">{{CustomMessages.Postcode}}</th> */}
                          <th className="text-center">Number of rooms</th>
                          {/* <th className="text-center">{{CustomMessages.NumberOfRooms}}</th> */}
                          <th className="text-center">Floor area (m<sup>2</sup>)</th>
                          {/* <th className="text-center" v-html="CustomMessages.FloorArea"></th> */}
                      </tr>
                  </thead>
                  <tbody>
                      {/* 
                          LOOP THROUGH PROPERTIES PROP
                          ENSURE KEY IS BOUND
                      */}
                      <tr>
                          <td className="text-center">ADDRESS</td>
                          {/* <td className="text-center">{{selectedProperty.Address}}</td> */}
                          <td className="text-center">Postcode</td>
                          {/* <td className="text-center">{{selectedProperty.Postcode}}</td> */}
                          <td className="text-center">Number of rooms</td>
                          {/* <td className="text-center">{{selectedProperty.NumberOfRooms}}</td> */}
                          <td className="text-center">Floor area</td>
                          {/* <td className="text-center">{{selectedProperty.FloorArea}}</td> */}
                      </tr>
                  </tbody>
              </table>
         </div>
       </div>
    );
  }
}

export default SelectedSearchResults;