import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { selectUsers } from './lab1Slice'

const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Password MD5 Hash',
        dataIndex: 'passwordHash',
        key: 'passwordHash',
    },
]

const UserTable = () => {
    const users = useSelector(selectUsers)

    return (
        <Table columns={columns} dataSource={users} />
    )
}

export default UserTable
