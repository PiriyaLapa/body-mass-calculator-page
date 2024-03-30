import { Component, ReactNode } from "react";
import { StyledHeaderSection } from "../../styles/Styles";
import HeaderCard from "../../components/Cards/HeaderCard";
import BmiForm from "../../components/forms/BmiForm";
import { HeaderContent } from "../../apis/contentData"; // Assuming ContentCal is exported from contentData

interface HeaderSectionProps {
  dataApis: HeaderContent;
}

export default class HeaderSection extends Component<HeaderSectionProps> {
  render(): ReactNode {
    const { header, contentcal } = this.props.dataApis;
    return (
      <StyledHeaderSection>
        <HeaderCard headerContent={header} />
        <BmiForm contentCal={contentcal} />
      </StyledHeaderSection>
    );
  }
}
