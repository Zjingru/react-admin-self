// src/components/BarChartExample.tsx
import React, { useState, useEffect } from 'react';
import BaseChart from '../../../components/echartCom';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
const BarChartExample: React.FC = () => {
    const [data, setData] = useState<number[]>([140, 232, 101, 1000, 90, 340, 250, 222]);
    const [loading, setLoading] = useState(false);
    // 图表配置
    const getOption = (): EChartsOption => ({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '1%'
        },
        xAxis: [
            {
                show: false,
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'MM']
            }
        ],
        yAxis: [
            {
                show: false,
                type: 'value'
            }
        ],
        series: [
            {
                // name: 'Line 1',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: data
            },
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

export default BarChartExample;