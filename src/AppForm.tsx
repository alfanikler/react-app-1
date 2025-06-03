import { Form } from "antd";
import { type PropsWithChildren } from 'react';

function AppForm(props: PropsWithChildren) {
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);

    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 900 }}
            scrollToFirstError
        >
            {props.children}
        </Form>
    )
}

export default AppForm;