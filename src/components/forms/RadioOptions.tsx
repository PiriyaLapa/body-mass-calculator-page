import { Component, ReactNode } from "react";
import { StyledRadioOption } from "../../styles/Styles";

interface RadioOptionsProps {
  optionA: string;
  optionB: string;
}

interface RadioOptionsState {
  selectedOption: string | null;
  isOptionASelected: boolean | null;
}
export default class RadioOptions extends Component<
  RadioOptionsProps,
  RadioOptionsState
> {
  constructor(props: RadioOptionsProps) {
    super(props);
    this.state = {
      selectedOption: null,
      isOptionASelected: null,
    };
  }

  handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value;
    const isOptionASelected = selectedOption === this.props.optionA;
    this.setState({ selectedOption, isOptionASelected });
  };

  render(): ReactNode {
    const { optionA, optionB } = this.props;
    const { selectedOption, isOptionASelected } = this.state;
    return (
      <StyledRadioOption>
        <div>
          <input
            id="metricA"
            type="radio"
            name="metric"
            value={optionA}
            checked={selectedOption === optionA}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="metricA">{optionA}</label>
        </div>
        <div>
          <input
            id="metricB"
            type="radio"
            name="metric"
            value={optionB}
            checked={selectedOption === optionB}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="metricB">{optionB}</label>
        </div>
        {isOptionASelected !== null && isOptionASelected ? (
          <h1>FormA</h1>
        ) : (
          <h1>FormB</h1>
        )}
      </StyledRadioOption>
    );
  }
}
