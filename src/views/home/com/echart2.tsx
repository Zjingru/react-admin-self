// src/components/BarChartExample.tsx
import React, { useState, useEffect } from 'react';
import BaseChart from '../../../components/echartCom';
import type { EChartsOption } from 'echarts';
const LineChartExample: React.FC = () => {
    const [data, setData] = useState<number[]>([120, 200, 150, 80, 70, 110, 130]);
    const [loading, setLoading] = useState(false);
    // 图表配置
    const getOption = (): EChartsOption => ({
        xAxis: {
            type: 'category',
            show: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        grid: {
            top: '1%',
            left: 0,
            right: 0,
            bottom: 0
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                data: data,
                type: 'bar'
            }
        ]
    });

    // 模拟数据更新
    const refreshData = () => {
        setLoading(true);
        setTimeout(() => {
            setData(
                Array(6)
                    .fill(0)
                    .map(() => Math.round(Math.random() * 200))
            );
            setLoading(false);
        }, 800);
    };

    return (
        <div style={{ height: '90px', width: '100%' }}>
            <BaseChart option={getOption()} />
        </div>
    );
};

export default LineChartExample;