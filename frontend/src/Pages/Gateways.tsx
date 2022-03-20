import { Col, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { useGetGateways } from "../api/hooks/useGetGateways";
import { IGateway } from "../types/Gateway";

const { Title } = Typography;

export const Gateways = () => {
  const { data: gateways } = useGetGateways();

  const columns: ColumnsType<IGateway | any> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={`/gateways/${record._id}`}>
          <Title level={5}>{text}</Title>
        </Link>
      ),
    },
    {
      title: "IP address",
      dataIndex: "ip_address",
      key: "ip_address",
    },
    {
      title: "serial number",
      dataIndex: "serial_number",
      key: "serial_number",
    },
    {
      title: "Peripheral devices",
      dataIndex: "devices",
      key: "devices",
      render: (text) => <span>{text.length}</span>,
    },
  ];

  if (!gateways) return <h3>Loading</h3>;

  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Gateways</Title>
      </Col>
      <Col span={24}>
        <Table rowKey="_id" columns={columns} dataSource={gateways}></Table>
      </Col>
    </Row>
  );
};
