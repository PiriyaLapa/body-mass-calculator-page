import styled from "styled-components";
import { respondToMax } from "../helper/MediaQueryHelper";
export const StyledHeaderSection = styled.section``;
export const StyledHeaderCard = styled.div`
  ${respondToMax("xs")`
      background:var(--linearBlue-color);
      h1, p {
            text-align:center;
      } 
      h1 {
            font-size:var(--font-size-heading-l);
      }
      p {
            font-size:var(--font-size-body-m);
      }
  `};
`;
