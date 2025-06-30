import React from 'react';
import { Button, ConfigProvider, Input, Space, theme } from 'antd';
import Layout from './layout/index'
// 默认算法 theme.defaultAlgorithm
// 暗色算法 theme.darkAlgorithm
// 紧凑算法 theme.compactAlgorithm
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      // 1. 单独使用暗色算法
      algorithm: theme.darkAlgorithm,

      // 2. 组合使用暗色算法与紧凑算法
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Layout >
    </Layout>
    {/* <Space>
      <Input placeholder="Please Input" />
      <Button type="primary">Submit</Button>
    </Space> */}
  </ConfigProvider>
);
export default App;