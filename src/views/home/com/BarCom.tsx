import React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BaseChart from '@/components/echartCom';
import type { EChartsOption } from 'echarts';
const BarCom: React.FC = () => {
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
    let data = []
    for(let i =0;i<12;i++){
        data.push(i+1+'月')
    }
    console.log(data)
    // 12.map((e)=>{

    // })
    const getOption = (): EChartsOption => ({
        title:{text:'销售额趋势',
            textStyle:{
                fontSize:'18px'
            }
        },
        xAxis: {
            type: 'category',
            data: data
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '12%',
            left: '5%',
            right: '3%',
            bottom: '5%'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    });
    const list = []
     for(let i =0;i<10;i++){
        list.push({
        text:'商品11',
        num:1009
    })
    }
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <div style={{height:'400px'}} className="flex">
                <div style={{height:'100%',width:'70%'}}>
                    <BaseChart option={getOption()}/>
                </div>
                <div style={{width:'30%'}}>
                    <h3>热门商品</h3>
                    <ul className="list">
                    {list.map((item, index) => (
                        <li key={index}>
                           <span className={`${index<3?'isActive':'isNone'}`}>{index+1}</span> 
                           <p>
                                {item.text}
                           </p>
                           <span className="num">{item.num}</span>
                            </li> // 使用key属性提高渲染效率
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BarCom;