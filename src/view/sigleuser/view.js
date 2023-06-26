import { useEffect } from "react";
import { useDelete, useUpdate, useUserId } from "../../hooks/web/WebHook";
import { useParams } from 'react-router-dom'
import { useState } from "react";
import { Button, Modal, Form, Input, Upload } from 'antd';
import { useForm } from "antd/es/form/Form";
import ImgCrop from 'antd-img-crop';
const View = () => {
    const { mutate } = useDelete()
    const { id } = useParams()
    const [form] = useForm()
    const [info, setInfo] = useState(null)
    const [fileList, setFileList] = useState([
        {
            url: info,
            thumburl: `${info && info?.avatar}`,
        },
    ])
    // console.log(fileList, 'filelist')
    const { data: singleData } = useUserId(id)
    useEffect(() => {
        if (singleData != undefined) {
            setInfo(singleData?.data)
        }
    }, [singleData])
    // console.log(info, '<-------info');

    // modal .........
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const showDlateModal = () => {
        setDeleteIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setDeleteIsModalOpen(false);

    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setDeleteIsModalOpen(false);

    };
    // modal form ....
    const { mutate: FormData } = useUpdate()
    const onFinish = (values) => {
        FormData({ data: [{ values }, { id }] })
    };
    const initialvalues = {
        id: info && info.id,
        First_name: info && info.first_name,
        last_name: info && info.last_name,
        email: info && info.email,
        avatar: fileList[0]?.thumburl,
        password: '12345456'
    }
    // upload ,,,,,,,,,,
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok')
        }, 0);
    }
    // DElETE.........
    const handleDelete =  () => {
        // console.log(data, 'data');
        if (info != null) {
             mutate(info)
            console.log(info)
        }
    }
    return (
        <>
            <div className="userbyid">
                <div className="infocardContainer">
                    <div id="main">
                        <img src={info && info.avatar}></img>
                    </div>
                    <div id="textbois">
                        <h2>{info && info.first_name} {info && info.last_name}</h2>
                        <h4>Frontend Developer</h4>
                        <a href="mailto:antobenis100@gmail.com">{info && info.email}</a>
                        <div id="hotlinks">
                            <Button type="primary" onClick={showModal}>
                                Edit
                            </Button>
                            <Button type="primary" onClick={showDlateModal}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={() => { form.submit(); handleOk() }} onCancel={handleCancel}
                style={{ maxWidth: 400 }}

            >
                <Form
                    form={form}
                    name="basic"
                    style={{ maxWidth: 300 }}
                    initialValues={initialvalues}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="First Name"
                        name="First_name"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
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
                    <Form.Item
                        name='avatar'>
                        <ImgCrop rotationSlider>
                            <Upload
                                listType="picture-circle"
                                fileList={fileList}
                                onChange={onChange}
                                maxCount={1}
                                customRequest={dummyRequest}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal title="Basic Modal" open={isDeleteModalOpen} onOk={() => { handleDelete(); handleOk() }} onCancel={handleCancel}>
                <p>Are You Realy Want Delete ?</p>

            </Modal>
        </>
    )
}
export default View;