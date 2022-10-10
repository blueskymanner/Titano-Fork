import React from "react";
import TitanoPrice from "./TitanoPrice";
import MarketValue from "./MarketValue"; 
import LiquidityValue from "./LiquidityValue";
import RiskValue from "./RiskValue";
import { Layout } from 'antd';
import "./MergeComponent.css"

function MergeComponent() {
  
    return (
        <Layout className="content">
            <TitanoPrice></TitanoPrice>
            <MarketValue></MarketValue>
            <LiquidityValue></LiquidityValue>
            <RiskValue></RiskValue>
        </Layout>
      
    )
  }
  
export default MergeComponent; 