import React from "react";
import BaseChart from "../../../components/echartCom";
import type { EChartsOption } from 'echarts';
const PieCom: React.FC = () => {
    const getOption = ():EChartsOption => ({
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '15%',
            orient: 'vertical',
            left: 'right',
            formatter: function (name) {
                return name;
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center',
                    fontSize: 10,
                    formatter: (params) => {
                        return [`{a|${params.name}}`, `{b|¥${params.value}}`].join('\n')
                    },
                    rich: {
                        a: {
                            fontSize: 28
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    })
    return (
        <div style={{height:'516px',width:'100%'}}>
            <BaseChart option={getOption()} />
        </div>
    )
}
export default PieCom;