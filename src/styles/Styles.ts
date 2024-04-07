import styled from "styled-components";
import { respondToMax } from "../helper/MediaQueryHelper";

export const StyledHeaderSection = styled.section``;
export const StyledHeroImg = styled.img``;
export const StyledLandingPage = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto auto auto;
`;
export const StyledMainSection = styled.section``;
export const StyledBmiForm = styled.form``;
export const StyledResultCard = styled.div``;
export const StyledBoxImg = styled.div``;
export const StyledMainContentBox = styled.div``;
export const StyledImgHero = styled.img``;
export const StyledSubMainCard = styled.div``;
export const StyledFooterSection = styled.div``;
export const StyledFooterContent = styled.div``;
export const StyledFooterMainCard = styled.div``;
export const styledFooterCard = styled.div``;
export const StyledHeaderCard = styled.div`
  font-size: "Inter";
  font-size: normal;
  text-align: center;
  ${respondToMax("sm")`
    width:100%; 
    height:auto;
    background:var(--gradient-color);
    :nth-child(1){margin-top:var(--font-size-body-m)};
    :nth-child(2){
      font-weight:600;
      line-height:110%;
      font-size:var(--font-size-heading-l); 
      display:block;
    }
    :nth-child(3){
      font-size:var(--font-size-body-m); 
      font-weigth:400;
      line-height:150%;
      color:var(--darkElectricBlue-color);

    }

  `}
`;
/** Please code Icon compoennt below */

/** MainIcon */
export const StyledHealhyIcon = styled.div``;
export const StyledRegularIcon = styled.div``;
export const StyledAdequateIcon = styled.div``;

/** FooterIcon */

export const StyledGenderIcon = styled.div``;
export const StyledAgeIcon = styled.div``;
export const StyledMuscleIcon = styled.div``;
export const StyledPregnancyIcon = styled.div``;
export const StyledRaceIcon = styled.div``;

export const StyledIconCollectionMain = styled.div``;
export const StyledIconCollectionFooter = styled.div``;
export const StyledScreenSizeDetect = styled.div`
  width: 90%;
  height: auto;
  display: inline-block;
  background-color: rgba(143, 227, 249, 0.2);
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  h1 {
    font-family: "Chivo";
    font-style: normal;
    font-weight: 900;
    text-transform: capitailze;
    font-size: 1em;
    span {
      color: #54e6af;
    }
  }
`;
