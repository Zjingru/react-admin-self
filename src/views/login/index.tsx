import {useState} from 'react'
import {message,Form,Input,Button} from 'antd'
import { useNavigate } from "react-router";

import './login.less'
const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = (values: { account: string; password: string }) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (values.account === "admin" && values.password === "123456") {
                // Router
                localStorage.setItem('token','admin123456')
                navigate('/');
                // message.success("登录成功！");
            } else {
                message.error("账户或密码错误");
            }
        }, 1200);
    };

    return (
        <div className="login-container">
            <Form
                className="login-form"
                onFinish={onFinish}
                layout="vertical"
                style={{ minWidth: 400, margin: "0 auto", padding: "40px 24px", background: "#fff", borderRadius: 8 }}
            >
                <h2 className="login-title" style={{ textAlign: "center" }}>后台管理登录</h2>
                <Form.Item
                    label="账户"
                    name="account"
                    rules={[{ required: true, message: "请输入账户" }]}
                >
                    <Input disabled={loading} />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: "请输入密码" }]}
                >
                    <Input.Password disabled={loading} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block loading={loading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;