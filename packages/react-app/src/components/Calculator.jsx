import React, { useState } from "react";
import { Layout, Typography, Slider } from 'antd';
import "./Calculator.css"

const { Content } = Layout;
const { Text } = Typography;

function Calculator() {

  const [date, setDate] = useState(30)

  const handleChangeDate = (value) => {
    let calcDate = Math.floor(365 / 100 * value);
    setDate(calcDate)
  }
  
    return (
      <Layout className="calc_container">
        <Content className="calc_card">
          <Content className="top">
            <Typography.Title level={4} style={{ margin: 0, color: "#FFFFFF", textAlign: "left" }} className="top_title">
              Calculator
            </Typography.Title>
            <Typography.Title level={5} style={{ margin: 0, color: "#FFFFFF", textAlign: "left" }} className="top_content">
              Estimate your returns
            </Typography.Title>
          </Content>
          <Content className="titano_info">
            <Content className="titano">
              <Typography.Title level={5} style={{ margin: 0 }} className="title">
                Freedom Price
              </Typography.Title>
              <Typography.Title level={4} style={{ margin: 0 }} className="value">
                $undefined
              </Typography.Title>
            </Content>
      
            <Content className="titano">
              <Typography.Title level={5} style={{ margin: 0 }} className="title">
                APY:
              </Typography.Title>
              <Typography.Title level={4} style={{ margin: 0, marginBottom: "3px" }} className="value">
                102,483.58%
              </Typography.Title>
            </Content>
      
            <Content className="titano">
              <Typography.Title level={5} style={{ margin: 0 }} className="title">
                Your Freedom Balance
              </Typography.Title>
              <Typography.Title level={4} style={{ margin: 0, marginBottom: "3px" }} className="value">
                0.00 Freedom
              </Typography.Title>
            </Content>
          </Content>
          <Content className="calc_input">
            <Content className="input_container">
              <Typography.Title level={4} className="input_title">
                Freedom Amount
              </Typography.Title>
              <Content className="input">
                <input type="number" className="number_input" />
                <Text className="prefix">Max</Text>
              </Content>
            </Content>
            <Content className="input_container">
              <Typography.Title level={4} className="input_title">
                APY (%)
              </Typography.Title>
              <Content className="input">
                <input type="number" className="number_input" />
                <Text className="prefix">Current</Text>
              </Content>
            </Content>
            <Content className="input_container">
              <Typography.Title level={4} className="input_title">
                Freedom price at purchase ($)
              </Typography.Title>
              <Content className="input">
                <input type="number" className="number_input" />
                <Text className="prefix">Current</Text>
              </Content>
            </Content>
            <Content className="input_container">
              <Typography.Title level={4} className="input_title">
                Future Freedom price ($)
              </Typography.Title>
              <Content className="input">
                <input type="number" className="number_input" />
                <Text className="prefix">Current</Text>
              </Content>
            </Content>
          </Content>
          <Content className="slider_container">
            <Typography.Title level={4} className="input_title">
              {date} days
            </Typography.Title>
            <Slider defaultValue={parseFloat(date/365.0 * 100)} disabled={false} tooltipVisible={false} className="day_slider" onChange={(value) => handleChangeDate(value)} />
          </Content>
          <Content className="calc_result">
            <Content className="data">
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="title">
                Your initial investment
              </Typography.Title>
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="value">
                $NaN
              </Typography.Title>
            </Content>
            <Content className="data">
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="title">
                Current wealth
              </Typography.Title>
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="value">
                $NaN
              </Typography.Title>
            </Content>
            <Content className="data">
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="title">
                Freedom rewards estimation
              </Typography.Title>
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="value">
                0.00 Freedom
              </Typography.Title>
            </Content>
            <Content className="data">
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="title">
                Potential return
              </Typography.Title>
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="value">
                $NaN
              </Typography.Title>
            </Content>
            <Content className="data">
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="title">
                Potential number of Space Travels
              </Typography.Title>
              <Typography.Title level={5} style={{ margin: 0, color: "#D0DCE8" }} className="value">
                $NaN
              </Typography.Title>
            </Content>
          </Content>
        </Content>
      </Layout>
    )
  }
  
  export default Calculator;