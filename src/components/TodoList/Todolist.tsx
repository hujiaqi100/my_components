import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../own/Button'
import Input from '../../own/Input'
interface useProps {
    todoList: any,
    inputValue: any,
    handleChange: any,
    handleAddElement: any,
    handlePushElement: any,
    defalut: any,
    error: any
}
const Todolist: React.FC<useProps> = (props) => {
    return (
        <div style={{ width: '100%', height: '100%', padding: '2%' }}>
            <div style={{ width: '100%', display: 'flex' }}>
                <Input w={15} h={5} c='#00cc99' type="text" value={props.inputValue} onChange={props.handleChange} />
                <div style={{ paddingLeft: '10px', width: '100%', display: 'flex', height: '3vh' }}>
                    <Button bkg='#fff' c='#00cc99' w={10} h={5} doClick={props.handleAddElement} name='Push List'></Button>
                    <label style={{ paddingLeft: '10px' }}></label>
                    <Button bkg='#fff' c='#00cc99' w={13} h={5} doClick={props.handlePushElement} name='Pop List element'></Button>
                </div>
            </div>
            <span style={{ color: 'tomato' }}>{props.error && props.error}</span>
            <br />
            <div style={{ width: '100%', height: "50%", border: '2px solid pink', padding: '20px' }}>
                <div style={{ overflowY: 'scroll', width: '100%', height: "100%" }}>
                    {
                        props.todoList.map((val: any) => {
                            return (
                                <div key={val} style={{ color: 'salmon', marginLeft: '3%', paddingBottom: '5px', fontFamily: 'monospace', fontSize: '20px' }}>
                                    {props.defalut} {'->'} {val}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{ width: '100%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', color: 'pink' }}>
                TODO_LIST
            </div>
            <div style={{ float: 'right', padding: '20px', fontSize: '20px', color: 'pink' }}>
                createby : hujiaqi
            </div>
        </div>
    )
}
Todolist.propTypes = {
    inputValue: PropTypes.string,
    todoList: PropTypes.array,
    defalut: PropTypes.string
}
Todolist.defaultProps = {
    defalut: 'Now'
}
const mapStateToProps = (state: any) => {
    return {
        todoList: state.todoList,
        inputValue: state.inputValue,
        error: state.error
    }
}
const mapDispatchToProps = (dispath: any) => {
    return {
        handleChange(e: { target: { value: any; }; }) {
            const action = {
                type: 'ONCHANGE_VALUE',
                value: e.target.value
            }
            dispath(action)
        },
        handleAddElement() {
            const action = {
                type: 'ADD_ELEMENT'
            }
            dispath(action)
        },
        handlePushElement() {
            const action = {
                type: 'PUSH_ELEMENT'
            }
            dispath(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);