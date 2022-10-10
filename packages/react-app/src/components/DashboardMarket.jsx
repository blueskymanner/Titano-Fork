import React, { useEffect, useState } from "react";
import { Layout, Typography } from 'antd';
import * as ethers from 'ethers'
import Web3  from "web3"
import axios from "axios";
import "./DashboardMarket.css"
import { useWeb3React } from '@web3-react/core'
import { getProvider } from "../helpers/providers"
import { abi } from "../contracts/Titano.json"

const { Content } = Layout;
const { Text } = Typography;

const chainIds = {
  mainnet: "0x38",
  testnet: "0x57"
} 
 
const contract = {
  mainnet: "0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f",
  testnet: "0x74248693e67d19993B5875Aa4eFAB991377cF36B"
}

const busdAddress = {
  mainnet: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  testnet: "0x78867bbeef44f2326bf8ddd1941a4439382ef2a7"
}

function DashboardMarket() {
  const [chain, setChain] = useState("mainnet")
  const [totalSupply, setTotalSupply] = useState(0)
  const [backedLiquidity, setBackedLiquidity] = useState(0)
  const [price, setPrice] = useState(0)
  const address = contract[chain]
  const busd = busdAddress[chain]
  const web3ArchiveProvider = new Web3.providers.HttpProvider("https://nodes.pancakeswap.com");
  const web3 = new Web3(web3ArchiveProvider)
  const titon = new web3.eth.Contract(abi, address) 
  
  useEffect(async () => {
    if (titon) {
      let res = await titon.methods.totalSupply().call();
      const totalSupply = res / 10 ** 18;
      setTotalSupply(totalSupply.toFixed(2))

      res = await titon.methods.getLiquidityBacking(10000).call()
      console.log("Backed: ", res)
      const backedLiqidty = res / 10000;
      setBackedLiquidity(backedLiqidty)

    }

    const {
      data: {
        data: {
          ethereum: { dexTrades },
        },
      },
    } = await axios.post(url, { query }, config)
    const price = dexTrades[0].quotePrice;
    setPrice(price.toFixed(2))
  }, [])


  const config = {
    headers: {
      'X-API-KEY': "BQYIzd660aV3dW3IkYM73AtxzPnHOxnS",
    },
  }
  const query = `
    {
    ethereum(network: bsc) {
      dexTrades(
        options: {desc: ["block.height","tradeIndex"], limit: 1}
        exchangeName: {in: ["Pancake v2"]}
        baseCurrency: {is: "0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f"}
        quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      ) {
        transaction {
          hash
        }
        tradeIndex
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        block {
          height
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quotePrice
     
      }
    }
  }
  
  `
  const url = `https://graphql.bitquery.io/`

  
  const getTotalSupply = () => {

  }

  return (
    <Layout className="dashboard">
      <Content className="market">
        <Typography.Title level={5} style={{ margin: 0 }} className="title">
          Market Cap
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0 }} className="value">
          {`$${(totalSupply * price).toFixed(2)}`}
        </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0 }} className="title">
          Circulating Supply
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0 }} className="value">
          {totalSupply}
        </Typography.Title>
      </Content>

      <Content className="market">
        <Typography.Title level={5} style={{ margin: 0 }} className="title">
          Freedom Price
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0, marginBottom: "3px" }} className="value">
          {`$${price}`}
        </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0 }} className="title">
          Backed Liquidity
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0 }} className="value">
          {`${backedLiquidity}%`}
        </Typography.Title>
      </Content>

      <Content className="market">
        <Typography.Title level={5} style={{ margin: 0 }} className="title">
          Next Rebase
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0, marginBottom: "3px" }} className="value">
          $NaN
        </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0 }} className="title">
          Average Freedom Holding
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0 }} className="value">
          $NaN
        </Typography.Title>
      </Content>
    </Layout>
  )
}

export default DashboardMarket;