import {Component,ReactNode} from 'react';
import { StyledResultCard } from '../../styles/Styles';


export default class ResultCard extends Component{
    render():ReactNode{
        return(
            <StyledResultCard>
                <p>Result after cals Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quas?</p>
            </StyledResultCard>
        )
    }
} 
