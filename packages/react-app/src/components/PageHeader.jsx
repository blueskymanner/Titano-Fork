import React from "react";
import { Layout, Typography } from 'antd';
import Logo from "./Icons/Logo"
import Account from "./Account"
import "./PageHeader.css"

const { Header} = Layout;
const { Text, Link } = Typography;

// displays a page header

export default function PageHeader({
  address,
  mainnetProvider,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  route,
  setRoute
}) {
  return (
      <Header className="header">
        <Link href="/" className="logo">
          <Logo />
          <Text className="title">Freedom Finance</Text>
        </Link>
        <Account
            address={address}
            mainnetProvider={mainnetProvider}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            blockExplorer={blockExplorer}
          />
      </Header>
      
      
    
  );
}
