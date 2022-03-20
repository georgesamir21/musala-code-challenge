import { Col, Row, Typography } from "antd";
import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
const { Title } = Typography;
export const Header = () => {
  return (
    <header className={classes.header}>
      <Row justify="space-between">
        <Col span={6}>
          <Link to="/">
            <Title className={classes.logo} level={4}>
              Gateway Management System
            </Title>
          </Link>
        </Col>
        <Col className={classes.links}>
          <NavLink className={isActive => isActive ? classes.active : ''}  to="/">Home</NavLink>
          <NavLink className={isActive => isActive ? classes.active : ''} to="/add-gateway">Add Gateway</NavLink>
        </Col>
      </Row>
    </header>
  );
};
