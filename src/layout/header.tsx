import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Layout, Divider, Avatar, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import './index.css'
import ThemeSwitcher from '../components/ThemeSwitcher'
const { Header } = Layout;
import { SearchOutlined, BellOutlined, GlobalOutlined, MoonOutlined } from '@ant-design/icons';
const headerVal = {
    // backgroundColor:'#fff',
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a>
                退出登陆
            </a>
        ),
    },
];

const App: React.FC = () => {

    const navigate = useNavigate()
    const loginOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    const clickDropItem = (item: any) => {
        console.log(item)
        if(item.key == '1'){
            loginOut()
        }

    }
    return (
        <Header style={{ padding: 0, ...headerVal }} className="flexEC bg header" >
            {/* <div>嗖嗖</div> */}
            <Button shape="circle" icon={<SearchOutlined />} />
            <Button shape="circle" icon={<BellOutlined />} />
            <Button shape="circle" icon={<GlobalOutlined />} />
            {/* <Button  shape="circle" icon={<MoonOutlined />} /> */}
            <ThemeSwitcher />
            <Divider type="vertical" />
            <Dropdown menu={{ items, onClick: clickDropItem }} >
                <a onClick={(e) => e.preventDefault()}>
                    <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size={'medium'} gap={4}>
                        user
                    </Avatar>
                </a>

            </Dropdown>

            {/* <a-button type="primary" shape="circle" :icon="h(SearchOutlined)" /> */}
        </Header>
    )
}
export default App;
