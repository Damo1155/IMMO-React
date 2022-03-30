import React from "react";

class SubmitAction extends React.Component {
  render() {
    return (
      <button type="submit" className="immo-btn immo-btn-submit">
          <span>
              <i className="fas fa-spinner fa-spin"></i>
          </span>
          <span>TEXT PROP</span>
      </button>
    );
  }
}

export default SubmitAction;