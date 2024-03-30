import { Component,ReactNode } from "react";
import {StyledBmiForm} from '../../styles/Styles';

export default class BimForm extends Component<BmiFromProps>{
    render():ReactNode{
        return(
            <StyledBmiForm>
                <input type="radio" name="Metric" id="" />
                <label htmlFor="">{FormData.OptionA}</label>
                <input type="radio" name="Metric" id="" />
                <label htmlFor="">{FormData.OptionB}</label>
                <label htmlFor="">{FormData.Height}</label>
                <input type="text" />
                <input type="text" />
                <label htmlFor="">{FormData.weight}</label>
                <input type="text" />
                <input type="text" />
                <ResultCard /> 
            </StyledBmiForm>
        )
    }
}
