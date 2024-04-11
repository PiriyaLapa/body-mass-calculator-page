import { Component, ReactNode } from "react";
import { StyledBmiForm } from "../../styles/Styles";
import ResultCard from "../Cards/ResultCard";

interface ContentCal {
  title: string;
  optionA: string;
  optionB: string;
  height: string;
  weight: string;
}
interface BmiFormProps {
  contentCal: ContentCal;
}
export default class BmiForm extends Component<BmiFormProps> {
  render(): ReactNode {
    const { title, optionA, optionB, height, weight } = this.props.contentCal;
    return (
      <StyledBmiForm id="">
        <h1>{title}</h1>
        <div>
          <input type="radio" name="metric" id="metricA" />
          <label htmlFor="metricA">{optionA}</label>
        </div>
        <div>
          <input type="radio" name="metric" id="metricB" />
          <label htmlFor="metricB">{optionB}</label>
        </div>
        <div>
          <label htmlFor="height">{height}</label>
          <input type="text" id="height" />
        </div>
        <div>
          <label htmlFor="weight">{weight}</label>
          <input type="text" id="weight" />
        </div>
        <ResultCard />
      </StyledBmiForm>
    );
  }
}
