import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useCreateGateway } from "../api/hooks/useCreateGateway";
import { GatewayForm } from "../components/GatewayForm";
import { IGateway } from "../types/Gateway";
const { Title } = Typography;

export const AddGateway = () => {
  const navigate = useNavigate();
  const createGateway = useCreateGateway();
  const handleGatewaySubmit = async (gateway: IGateway) => {
    const { data } = await createGateway(gateway);
    navigate(`/gateways/${data._id}`);
  };

  return (
    <div className="add-gateway-form">
      <Title level={3}>Add Gateway form!</Title>
      <GatewayForm
        onSubmit={(gateway) => handleGatewaySubmit(gateway)}
      ></GatewayForm>
    </div>
  );
};
