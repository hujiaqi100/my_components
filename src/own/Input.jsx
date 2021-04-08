import styled from 'styled-components';
const InputStyled = styled.input.attrs()
`
border-radius : 3px;
border : 2px solid palevioletred;
color : ${props => props.c};
background : ${props => props.bkg};
height : ${props => props.h + 'vh'};
width : ${props => props.w + 'vw'} ;
`  
const Input = (props)=>{
    return (
        <InputStyled 
        w={props.w}
        h={props.h}
        c={props.c}
        bkg={props.bkg}
        onChange = {props.onChange}
        value = {props.value}
        />
    )
}  
export default Input;