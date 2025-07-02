// src/components/BaseChart.tsx
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as echarts from 'echarts';
import type { EChartsOption, ECharts } from 'echarts';

interface BaseChartProps {
  option: EChartsOption;
  style?: React.CSSProperties;
  className?: string;
  theme?: string | object;
  onChartReady?: (instance: ECharts) => void;
}

export interface BaseChartRef {
  getInstance: () => ECharts | null;
}

const BaseChart = forwardRef<BaseChartRef, BaseChartProps>((props, ref) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ECharts | null>(null);

  // 初始化图表
  const initChart = () => {
    if (chartRef.current) {
      // 如果已经存在实例，先销毁
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
      
      // 创建新实例
      chartInstance.current = echarts.init(chartRef.current, props.theme);
      chartInstance.current.setOption(props.option);
      
      // 图表就绪回调
      if (props.onChartReady && chartInstance.current) {
        props.onChartReady(chartInstance.current);
      }
    }
  };

  // 更新图表
  const updateChart = () => {
    if (chartInstance.current) {
      chartInstance.current.setOption(props.option);
    }
  };

  // 响应式调整
  const resizeChart = () => {
    if (chartInstance.current) {
      chartInstance.current.resize();
    }
  };

  // 暴露实例方法
  useImperativeHandle(ref, () => ({
    getInstance: () => chartInstance.current,
  }));

  useEffect(() => {
    initChart();
    
    // 添加窗口大小变化监听
    window.addEventListener('resize', resizeChart);
    
    return () => {
      // 组件卸载时清理
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    updateChart();
  }, [props.option]);

  return (
    <div 
      ref={chartRef} 
      style={{ width: '100%', height: '100%', ...props.style }}
      className={props.className}
    />
  );
});

export default BaseChart;