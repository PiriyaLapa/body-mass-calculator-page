import styled from "styled-components";
import { respondTo } from "../helper/MediaQueryHelper";
export const StyledHeaderSection = styled.section``;
export const StyledHeaderCard = styled.div`
  ${respondTo("xs")`
  text-align:center;
  background:var(--gradient-color);
  width: 100vw;
  height: auto;
  span{
    font-size:var(--font-size-heading-l);
    // font-weight:semibold;
    font-weight:500;
  }
  p {
    font-size:var(--font-size-body-m);
    font-weigth:bold;
  }
  `}

  ${respondTo("s")`background:red;`}
`;
