import React from "react";

class InputText extends React.Component {
  render() {
    return (
      <div className="form-group mb-1">
          <label htmlFor="FieldIdentifier" className="immo-required">TEXT PROP</label>
          <input id="FieldIdentifier" type="text" className="form-control" />
      </div>
    );
  }
}

export default InputText;