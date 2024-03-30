import { Component, ReactNode } from "react";
import { HeaderContent } from "../../apis/contentData";
import { StyledHeaderSection } from "../../styles/Styles";
import HeaderCard from "../../components/Cards/HeaderCard";
import BimForm from "../../components/forms/BmiForm";

interface HeaderSectionProps {
  dataApis:HeaderContent
}

export default class HeaderSection extends Component<HeaderSectionProps> {
  render(): ReactNode {
      const {header} = this.props.dataApis;
    return (
      <StyledHeaderSection>
        <HeaderCard headerContent={header} />
        <BimForm />
      </StyledHeaderSection>
    );
  }
}
