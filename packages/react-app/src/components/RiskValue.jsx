import React from "react";
import { Layout, Typography } from 'antd';
import "./DashboardCard.css"

const { Content } = Layout;
const { Text } = Typography;

function RiskValue() { 
  
    return (
      <Layout className="card_container">
        <Content className="card">
          <Content style={{ textAlign: "left" }}>
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Freedom Price
            </Typography.Title>
            <Typography.Title level={4} style={{ margin: 0, color: "#D0DCE8" }} className="value">
              $0.1631
            </Typography.Title>
          </Content>
          <Text  style={{ textAlign: "right" }} className="percent">+3.97%</Text>
        </Content>
      </Layout>
    )
  }
  
  export default RiskValue;