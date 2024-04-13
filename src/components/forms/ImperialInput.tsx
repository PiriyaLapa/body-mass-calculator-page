import { Component, ReactNode } from "react";
import { StyledImperialInput } from "../../styles/Styles";
import ResultCard from "../Cards/ResultCard";

export default class ImperialInput extends Component {
  render(): ReactNode {
    return (
      <StyledImperialInput>
        <h1>ImperialForm</h1>
        <div>
          <label htmlFor="Imperial">Height</label>
          <input type="text" name="ft" id="ft" />
          <input type="text" name="in" id="in" />
        </div>
        <div>
          <label htmlFor="Imperial">Weight</label>
          <input type="text" name="st" id="st" />
          <input type="text" name="lbs" id="lbs" />
        </div>
        <ResultCard />
      </StyledImperialInput>
    );
  }
}
