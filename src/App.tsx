import React from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { getThemeConfig } from './theme/themeConfig';
import {
  RouterProvider
} from "react-router-dom";
import router from './router/index.tsx'
// 默认算法 theme.defaultAlgorithm
// 暗色算法 theme.darkAlgorithm
// 紧凑算法 theme.compactAlgorithm
const ThemedApp: React.FC = () => {
  const { currentTheme } = useTheme();
  const themeConfig = getThemeConfig(currentTheme);

  return (
    <ConfigProvider theme={themeConfig}>
      {/* <Layout /> */}
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ConfigProvider>
  );
};
const App: React.FC = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);
export default App;