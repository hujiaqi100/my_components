import * as React from 'react';
import { connect } from 'react-redux';
interface useProps {
    tagsList: any,
    handleSelectText: any,
    selectText: string,
    handleGetTitleList: any,
    titleList: any,
    handleDeleteTitle: any,
    handleChooseTitle: any
}
interface valAttribute {
    title: string,
    key: string,
    text: string
}
const Tags: React.FC<useProps> = (props) => {
    return (
        <div style={{ width: '100%', height: '100%', padding: '2%' }}>
            <div style={{ width: '100%', height: '55%', border: '1px solid pink' }}>
                <div style={{ width: '20%', height: '100%', float: 'left', borderRight: '1px solid pink' }}>

                    <div style={{ width: '100%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ color: 'salmon', fontSize: '20px' }}>Tags</span>
                    </div>

                    <div style={{ width: '100%', height: '95%', textAlign: 'center' }}>
                        {
                            props.tagsList.map((val: valAttribute, idx: number) => {
                                return <div key={val.key} style={{ padding: '5px', color: '#00cc99', fontSize: '20px' }}
                                    onClick={() => props.handleSelectText(idx)}
                                >
                                    {val.title}
                                </div>
                            })
                        }
                    </div>
                </div>
                <div style={{ display: 'flex', width: '80%', height: '5%', borderBottom: '1px solid pink', float: 'right' }}>
                    {
                        props.titleList && props.titleList.map((val: any, idx: number) => {
                            return (
                                <div key={idx} style={{ width: '13%', height: '100%', display: 'flex', alignItems: 'center', padding: '1px', borderTopRightRadius: '20px', borderRight: '2px solid pink', borderLeft: '1px solid pink', borderTop: '1px solid pink', cursor: 'pointer' }}
                                >
                                    <div style={{ color : 'salmon', width: '80%', padding: '2px' ,height : '100%',display : 'flex',alignItems : 'center'}} onClick={() => { props.handleChooseTitle(idx) }}>
                                        {val.title}
                                    </div>
                                    <div style={{ color : '#00cc99', width: '20%', cursor: 'pointer', textAlign: 'center', padding: '2px',height : '100%',display : 'flex',alignItems : 'center' }}
                                        onClick={() => { props.handleDeleteTitle(idx) }}
                                    >x
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ width: '80%', float: 'right', height: '95%', padding: '2%', color: 'salmon', fontSize: '20px' }}>
                    {props.selectText && props.selectText}
                </div>
            </div>
            <div style={{ width: '100%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', color: 'pink' }}>
                Tags
            </div>
            <div style={{ float: 'right', padding: '20px', fontSize: '20px', color: 'pink' }}>
                createby : hujiaqi
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        tagsList: state.tagsList,
        selectText: state.selectText,
        titleList: state.titleList
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleSelectText(res: any) {
            const action = {
                type: 'SELECT_TEXT',
                value: res
            }
            dispatch(action)
        },
        handleGetTitleList() {
            const action = {
                type: 'GET_TITLE_LIST'
            }
            dispatch(action)
        },
        handleDeleteTitle(res: any) {
            const action = {
                type: 'DELETE_TITLE',
                value: res
            }
            dispatch(action)
        },
        handleChooseTitle(val: any) {
            const action = {
                type: 'CHOOSE_TITLE',
                value: val
            }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tags)