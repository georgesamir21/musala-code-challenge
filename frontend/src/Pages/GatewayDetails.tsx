import { Tag, Table, Typography, Row, Col, Divider } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DeleteFilled } from "@ant-design/icons";
import { IPeripheralDevice } from "../types/PeripheralDevice";
import { PeripheralDeviceForm } from "../components/PeripheralDeviceFrom";
import { useGetGatewayById } from "../api/hooks/useGetGatewayById";
import { useParams } from "react-router-dom";
import { useCreateDevice } from "../api/hooks/useCreateDevice";
import { useDeleteDevice } from "../api/hooks/useDeleteDevice";

const { Title, Text } = Typography;

export const GatewayDetails = () => {
  const { id } = useParams();
  const { data: gateway, get } = useGetGatewayById(id!);
  const createDevice = useCreateDevice();
  const deleteDevice = useDeleteDevice();
  const handleDeviceDelete = async (deviceId: string) => {
    await deleteDevice(id!, deviceId);
    get();
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

  const handleDeviceAdded = async (device: IPeripheralDevice) => {
    await createDevice(id!, device);
    get();
  };

  if (!gateway) return <Title level={3}>Loading...</Title>;
  return (
    <>
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
          <Title level={3}>Devices:</Title>
        </Col>
        <Col span={24}>
          {gateway.devices.length ? (
            <Table
              dataSource={gateway.devices}
              columns={devicesColumns}
            ></Table>
          ) : (
            <Text strong>No devices yet, add one.</Text>
          )}
        </Col>
      </Row>
      <Divider />
      {gateway.devices.length < 10 && (
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
      )}
    </>
  );
};
