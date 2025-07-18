import React, { useState } from "react";
import BaseChart from '@/components/echartCom';
import type { EChartsOption } from 'echarts';
import ProTable from '@/components/ProTable';
interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    disabled?: boolean;
}

const HotSearch: React.FC = () => {
    let data = [820, 932, 901, 934, 1290, 1330, 1320]
    let data1 = [82, 92, 33, 34, 90, 30, 20]
    const getOption = (c1: any, c2: any, Data: any): EChartsOption => ({
        xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '3%',
            top: '1%'
        },
        yAxis: {
            type: 'value',
            show: false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        series: [
            {
                showSymbol: false,
                data: Data,
                type: 'line',
                lineStyle: {
                    width: 3,
                    color: c2
                },
                smooth: true,
                areaStyle: {
                    color: c1
                }
            }
        ]
    });
    const [showPagination, setShowPagination] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const products: Product[] = [
        { id: '1', name: 'Laptop', category: 'Electronics', price: 1200, stock: 15 },
        { id: '2', name: 'Smartphone', category: 'Electronics', price: 800, stock: 30 },
        { id: '3', name: 'Desk Chair', category: 'Furniture', price: 150, stock: 10 },
        { id: '4', name: 'Coffee Table', category: 'Furniture', price: 200, stock: 5 },
        { id: '5', name: 'Headphones', category: 'Electronics', price: 100, stock: 50 },
        { id: '6', name: 'Monitor', category: 'Electronics', price: 300, stock: 12 },
        { id: '7', name: 'Keyboard', category: 'Electronics', price: 80, stock: 25 },
        { id: '8', name: 'Mouse', category: 'Electronics', price: 40, stock: 35 },
        { id: '9', name: 'Bookshelf', category: 'Furniture', price: 120, stock: 7 },
        { id: '10', name: 'Desk Lamp', category: 'Home', price: 45, stock: 20 },
        { id: '11', name: 'Notebook', category: 'Stationery', price: 10, stock: 100 },
        { id: '12', name: 'Pen Set', category: 'Stationery', price: 25, stock: 60 },
    ];
    const columns = [
        {
            title: '产品名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '类别',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: '用户数',
            dataIndex: 'price',
            key: 'price',
            sorter: (a: Product, b: Product) => a.price - b.price,
            // render: (value: number) => `$${value.toFixed(2)}`,
        },
        {
            title: '周涨幅',
            dataIndex: 'stock',
            key: 'stock',
            sorter: (a: Product, b: Product) => a.stock - b.stock,
        },
    ];
    return (
        <div>
            <div className="flex hotSearch">
                <div>
                    <span>搜索用户数</span>
                    <div>
                        <b>8,839</b> <span>21%</span>
                    </div>
                    <BaseChart style={{ height: '90px' }} option={getOption('rgba(205,235,254)', 'rgba(99,191,252)', data)} />
                </div>
                <div>
                    <span>人均搜索次数</span>
                    <div>
                        <b>2,7</b> <span>26.3%</span>
                    </div>
                    <BaseChart style={{ height: '90px' }} option={getOption('rgba(224,247,249)', 'rgba(161,228,234)', data1)} />
                </div>
            </div>
            <div>
                <ProTable<Product>
                    dataSource={products}
                    columns={columns}
                    rowKey="id"
                    pagination={showPagination.pagination}
                    showSorter={true}
                    scroll={{ y: 300 }}
                    style={{ backgroundColor: '#fff', borderRadius: 8 }}
                />
            </div>

        </div>
    )
}
export default HotSearch;