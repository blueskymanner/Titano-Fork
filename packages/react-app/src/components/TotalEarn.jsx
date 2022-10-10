import React from "react";
import { Layout, Typography } from 'antd';
import "./TotalEarn.css"

const { Content } = Layout;
const { Text } = Typography;

function TotalEarn() {
  
    return (
      <Layout className="account_container">
        <Content className="total_earned">
          <Content style={{ textAlign: "left" }}>
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Freedom Price
            </Typography.Title>
            <Typography.Title level={1} style={{ margin: 0, color: "#26e2b3" }} className="value">
              $0.00
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              0.00 Freedom (0.00% increase)
            </Typography.Title>
          </Content>
        </Content>
      </Layout>
    )
  }
  
  export default TotalEarn;