import { Component, ReactNode } from "react";
import {
  StyledBoxImg,
  StyledMainContentBox,
  StyledMainSection,
} from "../../styles/Styles";
import { MainCardProps } from "../../interface/interface";

export default class MainSection extends Component<MainCardProps> {
  render(): ReactNode {
    return (
      <StyledMainSection>
        <StyledBoxImg>
          <ImgHero urlImg={img} />
        </StyledBoxImg>
        <StyledMainContentBox>
          <h1>{title}</h1>
          <p>{content}</p>
        </StyledMainContentBox>
      </StyledMainSection>
    );
  }
}
