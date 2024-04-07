import { Component, ReactNode } from "react";
import { SubCard, HeaderContent } from "../../apis/contentData";
import FooterCard from "../../components/Cards/FooterCard";
import { StyledFooterMainCard, StyledFooterSection } from "../../styles/Styles";
import { IConCollectionsFooter } from "../../components/Icons/IconColections";

interface FooterProps {
  dataApis: HeaderContent;
}

interface FooterState {
  maincard: { title: string; content: string };
  subcard: SubCard[];
}

export default class FooterSection extends Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {
      maincard: this.props.dataApis.cardcontent.footercontent.maincard,
      subcard: this.props.dataApis.cardcontent.footercontent.subcard,
    };
  }
  render(): ReactNode {
    const { title, content } =
      this.props.dataApis.cardcontent.footercontent.maincard;
    return (
      <StyledFooterSection>
        <StyledFooterMainCard>
          <h1>{title}</h1>
          <p>{content}</p>
        </StyledFooterMainCard>
        <FooterCard footerContent={this.state.subcard} />
        <IConCollectionsFooter />
      </StyledFooterSection>
    );
  }
}
