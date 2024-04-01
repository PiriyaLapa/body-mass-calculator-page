import { Component } from "react";
import { SubCard } from "../../apis/contentData";

interface FooterCardProps {
  footerContent: SubCard[];
}
interface FooterCardState {
  footerContent: SubCard[];
}

export default class FooterCard extends Component<
  FooterCardProps,
  FooterCardState
> {
  constructor(props: FooterCardProps) {
    super(props);
    this.state = {
      footerContent: this.props.footerContent,
    };
  }

  render() {
    const { footerContent } = this.state;
    return (
      <div>
        {footerContent.map((sub: SubCard) => (
          <div key={sub.id}>
            <h3>{sub.title}</h3>
            <p>{sub.content}</p>
          </div>
        ))}
      </div>
    );
  }
}
