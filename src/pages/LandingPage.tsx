import { Component, ReactNode } from "react";
import HeaderSection from "./sections/HeaderSection";
import { StyledLandingPage } from "../styles/Styles";
import { HeaderContent } from "../apis/contentData";
import { LandingPageState } from "../interface/interface";
// import MainSection from "./sections/MainSection";
// import FooterSection from "./sections/FooterSection";
import ScreenSizeDetect from "../components/screensizedetect/ScreenSizeDetect";
import { ScreenSizeDetectClass } from "../helper/detectScreenSizeClass";

export default class LandingPage extends Component<{}, LandingPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      headerContent: HeaderContent,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }
  // Function to update window dimensions in state
  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Add event listener to update window dimensions when resized
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Remove event listener when component is unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  render(): ReactNode {
    const { windowWidth, windowHeight } = this.state;
    const screenNow = new ScreenSizeDetectClass(windowWidth).detectScreenSize();
    return (
      <StyledLandingPage>
        <HeaderSection dataApis={HeaderContent} />
        {/* <MainSection dataApis={HeaderContent} />
        <FooterSection dataApis={HeaderContent} /> */}
        <ScreenSizeDetect screenNow={screenNow} windowWidth={windowWidth}  windowHeight={windowHeight}/>
      </StyledLandingPage>
    );
  }
}
