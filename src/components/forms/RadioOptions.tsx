import { Component, ReactNode } from "react";
import { StyledRadioOption } from "../../styles/Styles";

interface RadioOptionsProps {
  optionA: string;
  optionB: string;
}

interface RadioOptionsState {
  selectedOption: string;
}
export default class RadioOptions extends Component<RadioOptionsProps, RadioOptionsState> {
  constructor(props: RadioOptionsProps) {
    super(props);
    this.state = {
      selectedOption: props.optionA,
    };
  }

  handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render(): ReactNode {
    const { optionA, optionB } = this.props;
    const {selectedOption} = this.state;
    return (
      <StyledRadioOption>
        <div>
          <input id="metricA" type="radio" name="metric" value={optionA} checked={selectedOption === optionA} onChange={this.handleOptionChange}  />
          <label htmlFor="metricA">{optionA}</label>
        </div>
        <div>
          <input id="metricB" type="radio" name="metric" />
          <label htmlFor="metricB">{optionB}</label>
        </div>
      </StyledRadioOption>
    );
  }
}
