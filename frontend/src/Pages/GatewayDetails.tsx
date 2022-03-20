import { Tag, Table, Typography, Row, Col, Divider } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DeleteFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { IGateway } from "../types/Gateway";
import { IPeripheralDevice } from "../types/PeripheralDevice";
import { PeripheralDeviceForm } from "../components/PeripheralDeviceFrom";

const { Title, Text } = Typography;

export const GatewayDetails = () => {
  const [gateway, setGateway] = useState<IGateway | null>(null);

  const handleDeviceDelete = (id: string | number) => {
    console.log("delete", id);
  };

  const devicesColumns: ColumnsType<IPeripheralDevice> = [
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "_id",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "_id",
      render: (text) => (
        <Tag color={text === "offline" ? "volcano" : "green"}>{text}</Tag>
      ),
    },

    {
      title: "Actions",
      key: "_id",
      render: (text, record) => (
        <DeleteFilled onClick={() => handleDeviceDelete(record._id)} />
      ),
    },
  ];

  useEffect(() => {
    // TODO: make API call to get the gateway
    setGateway({
      name: "test",
      _id: "5000",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
        {
          vendor: "MICROSOFT",
          _id: "500",
          status: "offline",
          uid: 600000,
        },
        {
          vendor: "IBM",
          _id: "500",
          status: "offline",
          uid: 600000,
        },
        {
          vendor: "CISCO",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    });
  }, []);

  const handleDeviceAdded = (device: IPeripheralDevice) => {
    // TODO: make api call to add device
    console.log({ device });
  };

  if (!gateway) return <Title level={3}>Loading...</Title>;
  return (
    <div className="gateway-details">
      <Title level={2} className="title">
        {gateway.name}
      </Title>

      <Row className="details">
        <Col span={24}>
          <Text type="secondary" strong>
            Serial number:{" "}
          </Text>
          <Text>{gateway.serial_number}</Text>
        </Col>
        <Col span={24}>
          <Text type="secondary" strong>
            IP address:{" "}
          </Text>
          <Text>{gateway.ip_address}</Text>
        </Col>
      </Row>
      <Divider />
      <Row className="devices">
        <Col span={24}>
          {/* <CloudServerOutlined size={20} /> */}
          <Title level={3}>Devices:</Title>
        </Col>
        <Col span={24}>
          {gateway.devices.length && (
            <Table
              dataSource={gateway.devices}
              columns={devicesColumns}
            ></Table>
          )}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Title level={3}>Add Device</Title>
          <Col span={24}>
            <PeripheralDeviceForm
              onSubmit={(device) => handleDeviceAdded(device)}
            />
          </Col>
        </Col>
      </Row>
    </div>
  );
};
