import styled from "styled-components";
import { respondTo } from "../helper/MediaQueryHelper";
export const StyledHeaderSection = styled.section``;
export const StyledHeaderCard = styled.div`
  ${respondTo("xs")`
  margin:0 auto;
  max-width:375px;
  max-height:640px;
  padding:1.7rem;
  text-align:center;
  background:var(--gradient-color);
  width: 100vw;
  height: auto;
  display:flex;
  flex-direction:column;
  gap:24px;
  border-radius:0px 0px 35px 35px; 

  h1 {
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
  ${respondTo("s")`
  background-color:black; color:#ffff;
`}
${respondTo("sm")`
  background-color:green;
   color:yellow;
`}
`;
