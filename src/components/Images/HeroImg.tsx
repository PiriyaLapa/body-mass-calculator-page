import {Component,ReactNode} from 'react';
import {StyledHeroImg} from '../../styles/Styles';

interface HeroImgProps{
    urlImg:string;
}
export default class HeroImg extends Component<HeroImgProps>{
    render():ReactNode{
        const {urlImg} = this.props;
        return(
            <StyledHeroImg src={urlImg} />
        )
    }
}
