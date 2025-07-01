import React from 'react';
import { Switch, Tooltip } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '../theme/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, toggleTheme } = useTheme();
  
  return (
    <Tooltip title={`切换到${currentTheme === 'dark' ? '明亮' : '暗黑'}模式`}>
      <Switch
        checked={currentTheme === 'dark'}
        onChange={toggleTheme}
        checkedChildren={<BulbFilled style={{ color: '#FFD700' }} />}
        unCheckedChildren={<BulbOutlined />}
        style={{ background: currentTheme === 'dark' ? '#333' : '#ccc' }}
      />
    </Tooltip>
  );
};

export default ThemeSwitcher;