import { ethers } from 'ethers'
import Web3 from 'web3'

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/")
export const simpleTestRpcProvider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")

export function getProvider(chainId) {
    let provider
    switch (chainId) {
        case "0x38":
            provider = simpleTestRpcProvider
            break
        case "0x61":
            provider = simpleRpcProvider
            break
        default:
            provider = simpleRpcProvider
            break;
    }
    return provider
}

