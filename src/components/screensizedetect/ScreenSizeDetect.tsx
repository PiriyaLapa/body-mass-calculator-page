import { Component, ReactNode } from "react";
import { StyledScreenSizeDetect } from "../../styles/Styles";
import { NumberFormatter } from "../../helper/detectScreenSize";

interface ScreenSizeDetectProps {        
  screenNow: string;
  windowWidth: number;
  windowHeight: number;
}

export default class ScreenSizeDetect extends Component<ScreenSizeDetectProps> {
  render(): ReactNode {
    const {  windowWidth, windowHeight } = this.props;
    const formatter = new NumberFormatter();    
    const formatterWidth = formatter.formatNumber(windowWidth);
    const formatterHeight = formatter.formatNumber(windowHeight);
    return (
      <StyledScreenSizeDetect>
        <h1>
          Now device for : <span>{screenNow} </span>
        </h1>
        <h1>
          Width of screen: <span>{formatterWidth} pixel</span>
        </h1>
        <h1>
          Height of screen: <span>{formatterHeight} pixel</span>
        </h1>
      </StyledScreenSizeDetect>
    );
  }
}