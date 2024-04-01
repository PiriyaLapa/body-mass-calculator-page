import { Component, ReactNode } from "react";
import { SubCard } from "../../apis/contentData";

interface SubMainCardProps {
  subMainCardContent: SubCard[];
}
interface SubMainCardState {
  subMainCardContent: SubCard[];
}
export default class SubMainCard extends Component<
  SubMainCardProps,
  SubMainCardState
> {
  constructor(props: SubMainCardProps) {
    super(props);
    this.state = {
      subMainCardContent: this.props.subMainCardContent,
    };
  }
  render(): ReactNode {
    const { subMainCardContent } = this.state;
    return (
      <div>
        {subMainCardContent.map((sub: SubCard) => (
          <div key={sub.id}>
            <h1>{sub.title}</h1>
            <p>{sub.content}</p>
          </div>
        ))}
      </div>
    );
  }
}
