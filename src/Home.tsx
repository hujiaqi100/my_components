import * as React from 'react';
import { Menu } from 'antd';
import '../node_modules/antd/dist/antd.css'
import { Link } from 'react-router-dom'
import './home.css'
import history from './own/history'
import { useEffect } from 'react'
const { Item } = Menu;
const sider = [
    {
        title: 'TodoList',
        key: '0',
        path: '/'
    },
    {
        title: 'Tags',
        key: '1',
        path: '/tags'
    },
    {
        title : 'Dropdown',
        key : '2',
        path : '/drop'
    }
]
const Home: React.FC<{}> = () => {
    useEffect(() => {
        history.push(sider[0]['path'])
    }, [])
    return (
        <div>
            <div style={{ width: '100%', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'salmon' }}>
                React
            </div>
            <Menu
                defaultSelectedKeys={[sider[0]['key']]}
                style={{
                    width: '100%', height: '100%', textAlign: 'center', border: '0', background: 'rgb(220, 183, 203)'
                }}
            >
                {
                    sider.map(val => {
                        return (
                            <Item key={val.key} style={{ margin: '0', fontSize: '18px' }}>
                                <Link style={{ color: '#00cc99' }} to={val.path}>
                                    {val.title}
                                </Link>
                            </Item>
                        )
                    })
                }
            </Menu>
        </div>
    )
}
export default Home