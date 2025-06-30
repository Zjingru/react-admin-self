import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const suffix = (
     <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
)
const typeList = [
    {
      value: '1',
      label: '家电',
    },
    {
      value: '2',
      label: '美妆',
    },
    {
      value: '3',
      label: '生活用品',
    },
  ];
// 添加样式
const styles = {
    container: {
       width:'80%',
        margin:'0 auto',
        // padding:'20px',
        // border:'1px solid #ccc',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        height: '100vh',
        //   backgroundColor: '#f0f2f5',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    form: {
      width: '300px',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
}
const App: React.FC = ()=>{
    return (
        <div style={styles.container}>
              <Search
                placeholder="input search text"
                enterButton="Search"
                suffix={suffix}
                onSearch={onSearch}
                />
                <div>
                    <ul>
                        {/* 循环typelist数据 */}
                        {typeList.map((item,index)=>{
                            return (
                                <li key={index}>{item.label}</li>
                            )
                        })}
                        {/* <li></li> */}
                    </ul>
                </div>
        </div>
    )
}
export default App;
