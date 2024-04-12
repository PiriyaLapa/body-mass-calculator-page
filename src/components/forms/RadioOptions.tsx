import { Component } from "react";
import { StyledRadioOption } from "../../styles/Styles";

export default class RadioOptions extends Component {
  render() {
    <StyledRadioOption>
      <div>
        <input type="radio" name="metric" id="metricA" />
        <label htmlFor="metricA">{optionA}</label>
      </div>
      <div>
        <input type="radio" name="metric" id="metricB" />
        <label htmlFor="metricB">{optionB}</label>
      </div>
    </StyledRadioOption>;
  }
}
