import { Component } from "react";
import {
  StyledBoxImg,
  StyledMainContentBox,
  StyledMainSection,
} from "../../styles/Styles";
import { HeaderContent, SubCard } from "../../apis/contentData";
import HeroImg from "../../components/Images/HeroImg";
import SubMainCard from "../../components/Cards/SubMainCard";
import { IconColectionsMain } from "../../components/Icons/IconColections";

interface MainCardProps {
  dataApis: HeaderContent;
}

interface MainCardState {
  mainCardContent: {
    img: string;
    title: string;
    content: string;
  };
  subCardContent: SubCard[];
}
export default class MainSection extends Component<
  MainCardProps,
  MainCardState
> {
  constructor(props: MainCardProps) {
    super(props);
    this.state = {
      mainCardContent: this.props.dataApis.cardcontent.maincard,
      subCardContent: this.props.dataApis.cardcontent.subcard,
    };
  }
  render() {
    const {img,title,content} = this.state.mainCardContent; 
    const {subCardContent} = this.state;
    return (
      <StyledMainSection>
        <StyledBoxImg>
          <HeroImg urlImg={img} />
        </StyledBoxImg>
        <StyledMainContentBox>
          <h1>{title}</h1>
          <p>{content}</p>
          <h1>{title}</h1>
          <SubMainCard subMainCardContent={subCardContent} />
        </StyledMainContentBox>
          <IconColectionsMain />
        </StyledMainSection>
    );
  }
}
