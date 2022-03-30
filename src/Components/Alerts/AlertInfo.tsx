import React from "react";

// Models
import { AlertProps } from "Models/Components/Alerts/AlertState";

const AlertInfo = ({ Text, HideAlert }: AlertProps) => {
  return !HideAlert ? (
    <div className="alert alert-info" aria-atomic="true" aria-live="assertive" role="alert" aria-hidden="false">
        <span className="icon">
          <i className="fas fa-info-circle"></i>
        </span>
        <div className="text">{Text}</div>
    </div>
  ) : null;
}

export default AlertInfo;