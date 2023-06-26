import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useReg } from '../../hooks/auth/AuthHook';
const Register = () => {
    const { mutate: RegData } = useReg()
    const onFinish = (e) => {
        console.log(e, 'data from form');
        RegData(e);
    }
    return (
        <div className='project_form'>
            <div className="login-box">
                <h2>Register</h2>
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
                    <Form.Item
                        className='user-box'
                        name="name"
                    >
                        <Input 
                            placeholder='Full Name' />
                    </Form.Item>
                    <Form.Item>
                        <button type="submit" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Register
                        </button>
                        Or <Link to={'/Login'}>Login Here</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Register;