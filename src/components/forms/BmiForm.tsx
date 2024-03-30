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
      <StyledBmiForm>
        <h1>{title}</h1>
        <input type="radio" name="Metric" id="" />
        <label htmlFor="">{optionA}</label>
        <input type="radio" name="Metric" id="" />
        <label htmlFor="">{optionB}</label>
        <label htmlFor="">{height}</label>
        <input type="text" />
        <input type="text" />
        <label htmlFor="">{weight}</label>
        <input type="text" />
        <input type="text" />
        <ResultCard />
      </StyledBmiForm>
    );
  }
}
