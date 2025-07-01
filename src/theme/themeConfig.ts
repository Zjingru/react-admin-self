import { ThemeConfig, theme } from 'antd';

export const getThemeConfig = (themeMode: 'light' | 'dark'): ThemeConfig => {
    const isDark = themeMode === 'dark';

    return {
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
            colorBgContainer: isDark ? '#001628' : '#ffffff',
            colorPrimary: isDark ? '#0fbcf9' : '#1890ff',
            colorBgBase: isDark ? '#1a1a1a' : '#ffffff',
            colorTextBase: isDark ? '#e6e6e6' : '#333333',
            borderRadius: 6,
        },
        components: {
            Button: {
                colorPrimary: isDark ? '#0fbcf9' : '#1890ff',
                algorithm: true,
            },
            Card: {
                colorBgContainer: isDark ? '#222' : '#fff',
            },
            Layout: {
                colorBgHeader: isDark ? '#1a1a1a' : '#ffffff',
                colorBgBody: isDark ? '#141414' : '#f5f5f5',
            }
        }
    };
};