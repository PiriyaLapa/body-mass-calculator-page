import { Component, ReactNode } from "react";
import { StyledMarticFrom } from "../../styles/Styles";

export default class MatricForm extends Component {
  render(): ReactNode {
    return (
      <StyledMarticFrom>
        <h1>MatricFomr</h1>
        <div>
          <label htmlFor="">Height</label>
          <input type="text" name="height" id="height" />
        </div>
        <div>
          <label htmlFor="">weight</label>
          <input type="text" name="weight" id="weight" />
        </div>
      </StyledMarticFrom>
    );
  }
}
