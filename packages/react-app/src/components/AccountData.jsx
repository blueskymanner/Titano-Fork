import React from "react";
import { Layout, Typography, Skeleton } from 'antd';
import "./AccountData.css"

const { Content } = Layout;
const { Text } = Typography;

function AccountData() {
  
    return (
      <Layout className="data_container">
        <Content className="other_data">
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Current Freedom Price
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#26e2b3" }} className="value">
              $NaN USD
            </Typography.Title>
        </Content>
        <Content className="other_data">
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Next Reward Amount
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#26e2b3" }} className="value">
              Freedom
            </Typography.Title>
        </Content>
        <Content className="other_data">
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Next Reward Amount USD
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#26e2b3" }} className="value">
              USD
            </Typography.Title>
        </Content>
        <Content className="other_data">
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              Next Reward Yield
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#26e2b3" }} className="value">
              0.03958%
            </Typography.Title>
        </Content>
        <Content className="other_data">
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              ROI (5-Day Rate)
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#26e2b3" }} className="value">
              9.87%
            </Typography.Title>
        </Content>
        <Content className="other_data">
            <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8B2" }} className="title">
              ROI (5-Day Rate) USD
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#26e2b3" }} className="value">
              USD
            </Typography.Title>
        </Content>
      </Layout>
    )
  }
  
  export default AccountData;