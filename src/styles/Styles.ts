import styled from "styled-components";
import { respondTo, respondToMax } from "../helper/MediaQueryHelper";

export const StyledHeaderSection = styled.section``;
export const StyledHeroImg = styled.img``;
export const StyledLandingPage = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto auto auto;
  ${respondTo("md")`
    padding:3%;
  `};
`;
export const StyledMainSection = styled.section``;
export const StyledBmiForm = styled.form`
  border-radius: 16px;
  background-color: #ffff;
  ${respondToMax("xs")`
    
  `}

  ${respondTo("xs")`

  `}
`;
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
  // text-align: center;
  border-radius: 0px 0px 35px 35px;
  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );
  ${respondToMax("xs")`
    max-height:640px;
    display:grid;
    padding:1.25rem;
    grid-gap:1.5rem;
    width:100%; 
    height:auto;
    :nth-child(1){margin-top:var(--font-size-body-m); margin:0 auto;};
    :nth-child(2){
      font-weight:700;
      line-height:110%;
      font-size:var(--font-size-heading-l); 
      display:block;
      color:var(--gunmetal-color);
      letter-spacing:0.05em;
    }
    :nth-child(3){
      font-size:var(--font-size-body-m); 
      font-weigth:400;
      line-height:150%;
      color:var(--darkElectricBlue-color);
    }
  `}

  ${respondTo("xs")`
    max-height:640px;
    display:grid;
    padding:1.25rem;
    grid-gap:1.5rem;
    width:100%; 
    height:auto;
    :nth-child(1){margin-top:var(--font-size-body-m); margin:0 auto;};
    :nth-child(2){
      font-weight:700;
      line-height:110%;
      font-size:var(--font-size-heading-l); 
      display:block;
      color:var(--gunmetal-color);
      letter-spacing:0.05em;
    }
    :nth-child(3){
      font-size:var(--font-size-body-m); 
      font-weigth:400;
      line-height:150%;
      color:var(--darkElectricBlue-color);
    }
  `}

  ${respondTo("sm")`
    max-height:640px;
    display:grid;
    padding:1.25rem;
    grid-gap:1.5rem;
    width:100%; 
    height:auto;
    :nth-child(1){margin-top:var(--font-size-body-m); margin:0 auto;};
    :nth-child(2){
      width:58%;
      font-weight:600;
      line-height:110%;
      font-size:var(--font-size-heading-l); 
      margin: 0 auto;
      text-align:center;
      color:var(--gunmetal-color);
      letter-spacing:0.05em;
    }
    :nth-child(3){
      font-size:var(--font-size-body-m); 
      font-weigth:400;
      line-height:150%;
      color:var(--darkElectricBlue-color);
      padding: 0 3%;
    }
  `}

   /**  laptop size */
  ${respondTo("md")`
    max-width:987px;
    max-height:737px;
    width:70%;
    height:100%;
    // padding:1.25rem;
    padding:3rem 5rem 8rem 5rem;
    height:auto;
    display:grid;
    :nth-child(1){
          //
    };

    :nth-child(2){
      width:65%;
      font-weight:600;
      line-height:110%;
      font-size:var(--font-size-heading-l); 
      text-align:left;
      color:var(--gunmetal-color);
      letter-spacing:0.05em;
      position:relative;
      right:15%;
    }
    :nth-child(3){
      font-size:var(--font-size-body-m); 
      font-weigth:400;
      line-height:150%;
      color:var(--darkElectricBlue-color);
      padding: 0 3%;
    }

  `}
`;
/** Please code Icon compoennt below */

/** MainIcon */
export const StyledMainLogo = styled.div`
  ${respondTo("md")`
      position:relative;
      right:44%;
    `};
`;
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
export const StyledImperialInput = styled.div``;
export const StyledRadioOption = styled.div``;
export const StyledMarticFrom = styled.div``;