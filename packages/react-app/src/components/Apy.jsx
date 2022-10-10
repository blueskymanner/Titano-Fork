import React from "react";
import { Layout, Typography, Skeleton } from 'antd';
import "./Apy.css"

const { Content } = Layout;
const { Text } = Typography;

function Apy() {
  
    return (
      <Layout className="apy_container">
        <Content className="apy_card">
          <Content style={{ textAlign: "left" }}>
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              APY
            </Typography.Title>
            <Typography.Title level={2} style={{ margin: 0, color: "#D0DCE8" }} className="value">
              102,483.58%
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Daily ROI 1.90%
            </Typography.Title>
          </Content>
        </Content>
        <Content className="balance">
          <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
            Your Balance
          </Typography.Title>
          <Skeleton paragraph={{ rows: 1, width: "100%" }} title={false} active={true} className="skeleton" />
          <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
            0.00 Freedom
          </Typography.Title>
        </Content>
      </Layout>
    )
  }
  
  export default Apy;