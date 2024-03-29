import { Component, ReactNode } from "react";
import { StyledHeaderCard } from "../styles/Styles";

interface HeaderCardProps {
  headerContent: {
    title: string;
    content: string;
  };
}

export default class HeaderCard extends Component<HeaderCardProps> {
  render(): ReactNode {
    const { headerContent } = this.props;
    return (
      <StyledHeaderCard>
        <h1>{headerContent.title}</h1>
        <p>{headerContent.content}</p>
      </StyledHeaderCard>
    );
  }
}
