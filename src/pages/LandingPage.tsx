import { Component, ReactNode } from "react";
import HeaderSection from "./sections/HeaderSection";
import { StyledLandingPage } from "../styles/Styles";
import { HeaderContent } from "../apis/contentData";
import { LandingPageState } from "../interface/interface";

export default class LandingPage extends Component<{}, LandingPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      headerContent: HeaderContent,
    };
  }
  render(): ReactNode {
    return (
      <StyledLandingPage>
        <HeaderSection dataApis={HeaderContent} />
      </StyledLandingPage>
    );
  }
}
