import { Card, Statistic, Flex } from 'antd';
import dayjs from 'dayjs';
import './index.less'
// import BarChartExample from './com/echart1'
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
            <div className="mt12">

                <Flex gap="middle">
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
                        <div className='flex'>
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
                        <div className='flex'>
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
                    {/* <BarChartExample /> */}
                </Flex>

            </div>

        </div>
    )
}
export default Home;