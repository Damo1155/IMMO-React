import React from "react";

// Models
import { ButtonProps } from "Models/Components/Buttons/ButtonState";

const SubmitAction = ({ Text, IsProcessing }: ButtonProps): JSX.Element => {
  const componentConfiguration = {
    IsProcessing: () => (
      <button type="submit" className="immo-btn immo-btn-submit">
          <span>
              <i className="fas fa-spinner fa-spin"></i>
          </span>
          <span className="d-none">{Text}</span>
      </button>
    ),
    IsNotProcessing: () => 
      (<button type="submit" className="immo-btn immo-btn-submit">{Text}</button>)
  };

  return componentConfiguration[IsProcessing ? "IsProcessing" : "IsNotProcessing"]();
}

export default SubmitAction;