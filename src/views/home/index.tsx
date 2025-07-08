import { Card, Statistic, Flex, Col, Row } from 'antd';
import dayjs from 'dayjs';
import './index.less'
import BarChartExample from './com/echart1'
import LineChartExample from './com/echart2'
import { InfoCircleOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const baseStyle: React.CSSProperties = {
    width: '25%',
    height: 54,
};
const Home: React.FC = () => {
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
                                className='flex'
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
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}
export default Home;