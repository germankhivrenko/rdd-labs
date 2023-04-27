import md5 from 'md5'
import { Button, Form, Input, notification } from 'antd'
import { useSelector } from 'react-redux'
import { selectUsers } from './lab1Slice'


const LoginForm = () => {
    const users = useSelector(selectUsers)
    const [form] = Form.useForm()

    const onFinish = (values) => {
        const {username, password} = values
        const passwordHash = md5(password) 

        const user = users.find((user) => user.username === username && user.passwordHash === passwordHash)

        if (user) {
            form.resetFields()
            notification.success({message: 'Successfully logged in'})
        } else {
            notification.warning({message: 'Wrong credentials'})
        }
    }

    return (
        <Form
            form={form}  
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            <h2>Login</h2>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
