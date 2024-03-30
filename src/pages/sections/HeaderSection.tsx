import { Component, ReactNode } from "react";
import { HeaderContent } from "../../apis/contentData";
import { StyledHeaderSection } from "../../styles/Styles";
import HeaderCard from "../../components/Cards/HeaderCard";

export default class HeaderSection extends Component {
  render(): ReactNode {
    const { header } = HeaderContent;
    return (
      <StyledHeaderSection>
        <HeaderCard headerContent={header} />
      </StyledHeaderSection>
    );
  }
}
