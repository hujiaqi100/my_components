import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Select from '../../own/Select'
interface useProps {
    dropList: any,
    handleChange: any,
    dropValue: string,
    value: string
}
interface Params {
    content: never
}
const Dropdown: React.FC<useProps> = (props) => {
    const [dataList, setDataList] = useState([])
    const [value, setValue] = useState<string>('请输入。。')
    useEffect(() => {
        props.dropList.map((val: Params) => {
            return dataList.push(val.content)
        })
        setDataList([...dataList])/*  */
    }, [])
    const handleGetValue = async (res: any) => {
        setValue(res)
    }
    return (
        <div style={{ width: '100%', height: '100%', padding: '2%' }}>
            <div style={{ width: '100%', height: '50%', border: '1px solid pink' }}>
                <div style={{ width: '100%', height: '100%', padding: '2%' }}>
                    <Select
                        c='#00cc99'
                        w={20}
                        h={3}
                        value={value}
                        onChange={props.handleChange}
                        name={value}
                        dataList={dataList}
                        trValue={value}
                        onHandleGetValue={handleGetValue} />
                </div>
            </div>
            <br/>
            <div style={{ width: '100%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', color: 'pink' }}>
                DropDown
            </div>
            <div style={{ float: 'right', padding: '20px', fontSize: '20px', color: 'pink' }}>
                createby : hujiaqi
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        dropList: state.dropList,
        dropValue: state.dropValue
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleChange(e: any) {
            const action = {
                type: 'SELECT_CHANGE',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)