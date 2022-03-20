import { Form, Input, Button, Select } from "antd";
import { IPeripheralDevice } from "../../types/PeripheralDevice";

type Props = {
  onSubmit: (device: IPeripheralDevice) => void;
};

export const PeripheralDeviceForm = ({ onSubmit }: Props) => {
  const onFinish = (values: any) => {
    // console.log("Success:", values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="PeripheralDeviceForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="vendor"
        label="Vendor"
        rules={[{ required: true, message: "Vendor is required!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: "Status is required!" }]}
      >
        {/* TODO: get value */}
        <Select value={"offline"}>
          <Select.Option value="online">Online</Select.Option>
          <Select.Option value="offline">Offline</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
