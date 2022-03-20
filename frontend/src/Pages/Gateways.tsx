import { Col, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { IGateway } from "../types/Gateway";

const { Title } = Typography;

export const Gateways = () => {
  const gateways: IGateway[] = [
    {
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
      ],
    },
    {
      name: "test",
      _id: "50002",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
    {
      name: "test",
      _id: "50007",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
    {
      name: "test",
      _id: "50009",
      ip_address: "162.92.108.2",
      serial_number: "20336-555-555",
      devices: [
        {
          vendor: "IBM",
          _id: "500",
          status: "online",
          uid: 600000,
        },
      ],
    },
  ];

  const columns: ColumnsType<IGateway> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "_id",
      render: (text, record) => (
        <Link to={`/gateways/${record._id}`}>
          <Title level={5}>{text}</Title>
        </Link>
      ),
    },
    {
      title: "IP address",
      dataIndex: "ip_address",
      key: "_id",
    },
    {
      title: "serial number",
      dataIndex: "serial_number",
      key: "_id",
    },
    {
      title: "Peripheral devices",
      dataIndex: "devices",
      key: "_id",
      render: (text) => <span>{text.length}</span>,
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Gateways</Title>
      </Col>
      <Col span={24}>
        <Table columns={columns} dataSource={gateways}></Table>
      </Col>
    </Row>
  );
};
