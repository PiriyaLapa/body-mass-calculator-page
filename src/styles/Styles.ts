import styled from "styled-components";
// import { respondTo } from "../helper/MediaQueryHelper";
export const StyledHeaderSection = styled.section``;
export const StyledHeaderCard = styled.div`
         width:375px;
         height:auto;
         margin: 0 auto;
         @media screen and (max-width:767px){
          background-color:green;
         }
         @media screen and (min-width:768px) and (max-width:1023px){
            background-color:yellow;
        }

        // Labtop
        @media screen and (min-width:1024px) and (max-width:1439px){
            background-color:blue;
        }

        // Desktop
        @media screen and (min-width:1440px){
              background-color:pink;
        }
        @media screen and (min-width:1920px){
              background-color:#CADEFC;
        }
`;
