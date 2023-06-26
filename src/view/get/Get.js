import { Button, Table } from "antd";
import { useGet } from "../../hooks/web/WebHook";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Get = () => {
    const [user, setUser] = useState(null)
    const { data: userData } = useGet()
    console.log(userData?.data, 'getData');
    useEffect(() => {
        if (userData != undefined) {
            setUser(userData?.data)
        }
    }, [userData])
    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
            width: '10px'
        },
        {
            title: 'Full Name',
            dataIndex: 'Full name',
            key: 'name',
            render: (text, r) => <span>
                {r?.first_name}{r?.last_name}
            </span>
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'image',
            dataIndex: 'avatar',
            key: 'address',
            render: (text, r) => <img src={`${r?.avatar}`} />
        },
        {

            dataIndex: 'avatar',
            key: 'address',
            render: (text, r) => <Button type="primary"><Link className="ant-btn " to={`/view/${r && r?.id}`}>View</Link></Button>

        },

    ]
    return (
        <>
            <Table dataSource={user} columns={columns}
                rowKey={(r) => (r?.id)}
            />;
        </>
    )
}
export default Get;
