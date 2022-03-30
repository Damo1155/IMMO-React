import React from "react";

// Models
import { InputControlProps } from "Models/Components/Inputs/InputControlState";

const InputText = ({ Text, FieldIdentifier, IsReadonly, IsRequired, MaxLength, AsPlaceholder }: InputControlProps) => {
  const componentConfiguration = {
    StandardInput: () => {
      return (
        <div className="form-group mb-1">
          <label htmlFor={FieldIdentifier}>{Text}</label>
          <input id={FieldIdentifier} type="text" className="form-control" />
        </div>
      )
    },
    PlaceholderInput: () => {
      return (
        <input type="text" className="form-control" id={FieldIdentifier} aria-required={IsRequired} readOnly={IsReadonly}
               maxLength={MaxLength} placeholder={Text} aria-label={Text} />
      )
    }
  };

  return componentConfiguration[AsPlaceholder ? "PlaceholderInput" : "StandardInput"]();
}

export default InputText;