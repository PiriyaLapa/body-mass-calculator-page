import { Component, ReactNode } from "react";
import {
  StyledBoxImg,
  StyledMainContentBox,
  StyledMainSection,
} from "../../styles/Styles";
import { HeaderContent } from "../../apis/contentData";
import HeroImg from "../../components/Images/HeroImg";
import MainSubCard from "../../components/Cards/MainSubCard";

interface MainCardProps {
  dataApis: HeaderContent;
}
export default class MainSection extends Component<MainCardProps> {
  render(): ReactNode {
    const { img, title, content } = this.props.dataApis.cardcontent.maincard;
    const {subContent} = this.props.dataApis.cardcontent;


    return (
      <StyledMainSection>
        <StyledBoxImg>
          <HeroImg urlImg={img} />
        </StyledBoxImg>
        <StyledMainContentBox>
          <h1>{title}</h1>
          <p>{content}</p>
        </StyledMainContentBox>
        <MainSubCard />
      </StyledMainSection>
    );
  }
}
