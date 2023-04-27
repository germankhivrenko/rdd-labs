import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input, notification } from 'antd'
import { register, selectUsers } from './lab1Slice'

const RegistrationForm = () => {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const onFinish = (values) => {
        const user = users.find((user) => user.username === values.username)

        if (user) {
          notification.warning({message: 'Username already exists'})
          return
        }

        dispatch(register(values))
        form.resetFields()

        notification.success({message: 'User successfully registered'})
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
        >
            <h2>Registration</h2>
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

export default RegistrationForm
