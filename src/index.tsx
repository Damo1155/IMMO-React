import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/js/all";

// Styles
import "SCSS/site-layout.scss";

// Components
import SiteHeader from "Pages/Structure/SiteHeader";
import PropertySearchTool from "Pages/PropertySearch/PropertySearchTool";

const App = () => (
  <div>
    <div aria-live="polite" aria-atomic="false" className="position-fixed end-0">
        <div id="immo-toast-container" className="toast-container p-3"
             data-original-class="toast-container position-absolute p-3"></div>
    </div>

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