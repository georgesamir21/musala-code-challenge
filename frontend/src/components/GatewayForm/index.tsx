import { Form, Input, Button } from "antd";
import { IGateway } from "../../types/Gateway";

type Props = {
  onSubmit: (device: IGateway) => void;
};

export const GatewayForm = ({ onSubmit }: Props) => {
  const onFinish = (values: any) => {
    // console.log("Success:", values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="GatewayForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="Gateway Name"
        rules={[{ required: true, message: "Gateway name is required!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="ip_address"
        label="IP Adress"
        rules={[{ required: true, message: "Gateway IP Address is required!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="serial_number"
        label="Serial Number"
        rules={[
          { required: true, message: "Gateway Serial Number is required!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
