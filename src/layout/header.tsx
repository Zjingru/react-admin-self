import React, { useState } from 'react';
import { Layout,Divider,Avatar,Button } from 'antd';
import './index.css'
import ThemeSwitcher from '../components/ThemeSwitcher'
const { Header } = Layout;
import { SearchOutlined,BellOutlined,GlobalOutlined,MoonOutlined } from '@ant-design/icons';
const headerVal = {
    // backgroundColor:'#fff',
}
const App: React.FC = () => {
    return (
        <Header style={{ padding: 0,...headerVal}} className="flexEC bg header" >
            {/* <div>嗖嗖</div> */}
            <Button  shape="circle" icon={<SearchOutlined />} />
            <Button  shape="circle" icon={<BellOutlined />} />
            <Button  shape="circle" icon={<GlobalOutlined />} />
            {/* <Button  shape="circle" icon={<MoonOutlined />} /> */}
            <ThemeSwitcher />
            <Divider type="vertical" />
            <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size={'medium'} gap={4}>
                user
            </Avatar>
            {/* <a-button type="primary" shape="circle" :icon="h(SearchOutlined)" /> */}
        </Header>
    )
}
export default App;
