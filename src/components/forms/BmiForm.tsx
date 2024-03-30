import { Component, ReactNode } from "react";
import { StyledBmiForm } from "../../styles/Styles";
import { HeaderContent } from "../../apis/contentData";
import { BmiFromProps } from "../../apis/interface/interface";
import ResultCard from "../Cards/ResultCard";

export default class BmiForm extends Component<BmiFromProps> {
  render(): ReactNode {
    const { title, optionA, optionB, height, weight } =
      HeaderContent.contentcal;
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
