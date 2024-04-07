import { Component, ReactNode } from "react";
import { StyledHeaderCard } from "../../styles/Styles";
import Logo from "../Icons/Logo";

interface HeaderCardProps {
  headerContent: {
    title: string;
    content: string;
  };
}

export default class HeaderCard extends Component<HeaderCardProps> {
  render(): ReactNode {
    const { title,content} = this.props.headerContent;
    return (
      <StyledHeaderCard>
        <Logo />
        <span>{title}</span>
        <span>{content}</span>
      </StyledHeaderCard>
    );
  }
}
