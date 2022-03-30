import React from "react";
import ReactDOM from "react-dom";

// Styles
import "SCSS/site-layout.scss";

// Components
import SiteHeader from "Pages/Structure/SiteHeader";
import PropertySearchTool from "Pages/PropertySearch/PropertySearchTool";

const App = () => (
  <div>
    <SiteHeader></SiteHeader>

    <div className="container-fluid">
      <PropertySearchTool></PropertySearchTool>
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("app")
);