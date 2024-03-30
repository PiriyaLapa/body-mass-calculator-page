import { HeaderContent } from "../apis/contentData";

export interface MainCardProps{
    img:string;
    title:string;
    content:string;
}

export interface LandingPageState {
  headerContent: HeaderContent;
}