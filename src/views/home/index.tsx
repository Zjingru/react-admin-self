import { Card, Statistic, Flex, Col, Row, Radio } from 'antd';
import dayjs from 'dayjs';
import './index.less'
import BarChartExample from './com/echart1'
import LineChartExample from './com/echart2'
import BarCom from './com/BarCom';
import HotSearch from './com/hotSearch';
import PieCom from './com/pieCom';
import type { RadioChangeEvent } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import { InfoCircleOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
    { label: '全部渠道', value: 'Apple', className: 'label-1' },
    { label: '线上', value: 'Pear', className: 'label-2' },
    { label: '书店', value: 'Orange', className: 'label-3' },
];
const Home: React.FC = () => {
    const [value4, setValue4] = useState('Apple');
    const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };
    return (
        <div>
            <Card>
                <span className='mr10'>{dayjs().format('YYYY-MM-DD HH:mm:ss')}</span>
                <span>星期{dayjs().weekday()}</span>
            </Card>
            <Row gutter={[16, 16]} className='mt12 rows'>
                <Col span={6}>
                    <Card
                        extra={<InfoCircleOutlined />}
                        title="销售额"
                        classNames={{
                            header: 'card-header',
                        }}
                        styles={{
                        }}
                        actions={[
                            <p className="text-left pl12">日均销售额  ¥12,893</p>
                        ]}
                    >
                        <Statistic value={112893} />
                        <div className='flex mt10'>
                            <Statistic
                                className='flex '
                                title="月环"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600', fontSize: '14px' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                            <Statistic
                                className='flex'
                                title="日环"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322', fontSize: '14px' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        extra={<InfoCircleOutlined />}
                        title="支付转化率"
                        classNames={{
                            header: 'card-header',
                        }}
                        styles={{
                        }}
                        actions={[
                            <div className='flex'>
                                <Statistic
                                    className='flex'
                                    title="周同比"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600', fontSize: '14px' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                                <Statistic
                                    className='flex'
                                    title="日环比"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322', fontSize: '14px' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                />
                            </div>

                        ]}
                    >
                        <Statistic value={12} suffix="%" />
                        <div className='flex mt10 process'>
                            <div style={{ width: '12%' }}></div>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        extra={<InfoCircleOutlined />}
                        title="订单数"
                        classNames={{
                            header: 'card-header',
                        }}
                        actions={[
                            <p className="text-left pl12">日访问量  ¥12,893</p>
                        ]}>
                        <BarChartExample />
                    </Card></Col>
                <Col span={6}>
                    <Card
                        extra={<InfoCircleOutlined />}
                        title="UV"
                        classNames={{
                            header: 'card-header',
                        }}
                        actions={[
                            <p className="text-left pl12">转换率  60%</p>
                        ]}>
                        <LineChartExample />
                    </Card>
                </Col>
            </Row>
            <Card className='mt12'>
                <BarCom />
            </Card>
            <Row gutter={[16, 16]} className='mt12'>
                <Col span={12}>
                    <Card title="热门搜索" className=''>
                        {/* <span>ss</span> */}
                        <HotSearch />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="销售额类比占额">
                        <Radio.Group
                            options={optionsWithDisabled}
                            onChange={onChange4}
                            value={value4}
                            optionType="button"
                            buttonStyle="solid"
                        />
                        <PieCom/>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Home;