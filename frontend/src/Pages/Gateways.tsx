import { Col, Row, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { useGetGateways } from "../api/hooks/useGetGateways";
import { IGateway } from "../types/Gateway";

const { Title } = Typography;

export const Gateways = () => {
  const { data: gateways, get } = useGetGateways();

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

  if (!gateways) return <h3>Loading</h3>;

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
