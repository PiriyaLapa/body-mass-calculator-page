import { Component, ReactNode } from "react";
import { StyledBmiForm } from "../../styles/Styles";
import ResultCard from "../Cards/ResultCard";
import ImperialInput from "./ImperialInput";
import RadioOptions from "./RadioOptions";

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
    const { title, optionA, optionB } = this.props.contentCal;
    return (
      <StyledBmiForm id="">
        <h1>{title}</h1>
        <RadioOptions />
        <ImperialInput />
        <ResultCard />
      </StyledBmiForm>
    );
  }
}
