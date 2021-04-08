import styled from 'styled-components';
import { useState, useEffect } from 'react'
import heart from '../images/heart.png'
const SelectStyled = styled.div.attrs()
    `
    display:flex;
    align-items: center;
    border-radius : 3px;
    border : 1px solid palevioletred;
    color : ${props => props.c};
    background : ${props => props.bkg};
    height : ${props => props.h + 'vh'};
    width : ${props => props.w + 'vw'} ;
`
const Select = (props) => {
    const [vis, setVis] = useState(false)
    const handleChangeVis = () => {
        setVis(true)
    }
    const handleChooseValue = (res) => {
        let x = props.trValue
        x = props.dataList[res]
        props.onHandleGetValue(x)
        setVis(false)
    }
    useEffect(() => {
        console.log();
    }, [])
    return (
        <div>
            <SelectStyled
                w={props.w}
                h={props.h}
                c={props.c}
                bkg={props.bkg}
                onChange={props.onChange}
                value={props.value}
            >
                <div style={{ width: '70%', fontSize: '10px', paddingLeft: '10px' }}>
                    {props.name}
                </div>
                <div style={{ width: '30%', float: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleChangeVis}>
                    <img style = {{width : '30%',height : '30%'}} src={heart} />
                </div>
            </SelectStyled>
            {
                vis === true &&
                <div style={{ width: `${props.w + 'vw'}`, borderLeft: '1px solid palevioletred', borderRight: '1px solid palevioletred', borderBottom: '1px solid palevioletred' }}>
                    {
                        props.dataList && props.dataList.map((val, idx) => {
                            return (
                                <div key={val} style={{ color: 'salmon', paddingLeft: '10px' }} onClick={() => { handleChooseValue(idx) }}>
                                    {val}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
export default Select