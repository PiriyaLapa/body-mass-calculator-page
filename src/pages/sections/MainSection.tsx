import { Component, ReactNode } from "react";
import {
  StyledBoxImg,
  StyledMainContentBox,
  StyledMainSection,
} from "../../styles/Styles";
import { HeaderContent, SubCard } from "../../apis/contentData";
import HeroImg from "../../components/Images/HeroImg";

interface MainCardProps {
  dataApis: HeaderContent;
}
export default class MainSection extends Component<MainCardProps> {
  render(): ReactNode {
    const { img, title, content } = this.props.dataApis.cardcontent.maincard;
    const {subcard} = this.props.dataApis.cardcontent;


    return (
      <StyledMainSection>
        <StyledBoxImg>
          <HeroImg urlImg={img} />
        </StyledBoxImg>
        <StyledMainContentBox>
          <h1>{title}</h1>
          <p>{content}</p>
          <h1>{title}</h1>
          {subcard.map((sub:SubCard) => (<div key={sub.id}><h1>{sub.title}</h1><p>{sub.content}</p></div>))}
        </StyledMainContentBox>
      </StyledMainSection>
    );
  }
}
