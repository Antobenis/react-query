import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/auth/AuthHook';
const Login = () => {
    const { mutate: loginData } = useLogin()
    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        loginData(values)
    };
    return (
        <div className='project_form'>
            <div className="login-box">
                <h2>Login</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        className='user-box'
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            placeholder='User Name' />
                    </Form.Item>
                    <Form.Item
                        className='user-box'
                        name="password"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input type="password"
                            placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        <button type="submit" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Log in
                        </button>
                        Or <Link to={'/register'}>Register Now</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};
export default Login;