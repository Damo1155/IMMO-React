import React from "react";

class SiteHeader extends React.Component {
  render() {
    return (
        <header className="immo-nav-header">
            <div className="immo-nav-branding d-flex">
                <div className="immo-brand-logo">            
                    <img src="../../Images/immo-logo.svg" alt="IMMO logo" />
                    {/* <img src="../../Images/immo-logo.svg" alt="CustomMessages.BrandImage" /> */}
                </div>
                <div className="immo-pageheader flex-grow-1">
                    <div className="d-flex justify-content-center h-100">
                        <h1 className="h2 m-0">Property search tool</h1>
                        {/* <h1 className="h2 m-0">{{CustomMessages.PropertySearchTool}}</h1> */}
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default SiteHeader;