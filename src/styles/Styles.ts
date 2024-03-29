import styled from "styled-components";
import { respondTo } from "../helper/MediaQueryHelper";
export const StyledHeaderSection = styled.section``;
export const StyledHeaderCard = styled.div`
  ${respondTo("xs")`
  max-width:327px;
  max-height:327px;
  width:100vw;
  height:auto;
  padding:1rem;
  text-align:center;
  background:var(--gradient-color);
  width: 100vw;
  height: auto;
  display:flex;
  flex-direction:column;
  gap:24px;
  span{
    font-size:var(--font-size-heading-l);
    font-weight:600;
    line-height:100%;
    text-align:center;
    letter-spacing: -0.05em;
    color:var(--gunmetal-color);
  }
  p {
    font-size:var(--font-size-body-m);
    font-weigth:400;
    font-style:normal;
    line-height:150%; 
    color:var(--darkElectricBlue-color);
    
  }
  `}

  ${respondTo("s")`background:red;`}
`;
