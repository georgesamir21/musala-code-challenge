import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import "./App.scss";
import { Header } from "./components/Header";
import { AddGateway } from "./Pages/AddGateway";
import { GatewayDetails } from "./Pages/GatewayDetails";
import { Gateways } from "./Pages/Gateways";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout.Content className="my-content">
          <Routes>
            <Route path="/" element={<Gateways />} />
            <Route path="/add-gateway" element={<AddGateway />} />
            <Route path="/gateways/:id" element={<GatewayDetails />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Layout.Content>
      </BrowserRouter>
    </>
  );
}

export default App;
