import styled from "styled-components";
import { respondToMax } from "../helper/MediaQueryHelper";

export const StyledHeaderSection = styled.section``;
export const StyledHeroImg= styled.img``;
export const StyledLandingPage = styled.div``;
export const StyledMainSection = styled.section``;
export const StyledBmiForm = styled.form``;
export const StyledResultCard = styled.div``;
export const StyledBoxImg = styled.div``;
export const StyledMainContentBox = styled.div``;
export const StyledImgHero= styled.img``;
export  const StyledSubMainCard = styled.div``;
export const StyledFooterSection = styled.div``;
export const StyledFooterContent= styled.div``;
export const styledFooterCard = styled.div``;
export const StyledHeaderCard = styled.div`
  ${respondToMax("xs")`
      background:var(--linearBlue-color);
      h1, p {
            text-align:center;
            color:#ffff;
      } 
      h1 {
            font-size:var(--font-size-heading-l);
      }
      p {
            font-size:var(--font-size-body-m);
      }
  `};
`;
