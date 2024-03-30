import styled from "styled-components";
// import { respondTo } from "../helper/MediaQueryHelper";
export const StyledHeaderSection = styled.section``;
export const StyledHeaderCard = styled.div`
  @media screen and (max-width: 767px) {
    width:100vw;
    height:auto;
    background-color:red;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* background-color:#BDCDD6; */
    /* padding: 3% 5%; */
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    /* background-color:#93BFCF; */
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
