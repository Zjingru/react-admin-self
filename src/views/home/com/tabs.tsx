import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: '销售额',
    },
    {
        key: '2',
        label: '访问量',
    }
];

// const tabs1: React.FC = () => {
//     return (
//         <div>
//             <p>热门商品</p>
//         </div>
//     )
// }
const App: React.FC = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            {/* <tabs1 /> */}
        </div>
    )
}

export default App;