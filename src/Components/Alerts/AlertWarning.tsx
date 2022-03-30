import React from "react";

class AlertWarning extends React.Component {
  render() {
    return (
        <div className="alert alert-warning" aria-atomic="true" aria-live="assertive" role="alert" aria-hidden="false">
            <span className="icon">
                <i className="fas fa-info-circle"></i>
            </span>
            <div className="text">TEXT PROP</div>
        </div>
    );
  }
}

export default AlertWarning;