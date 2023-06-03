"use client"
import { useState, useEffect } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

export function WalletProvider
({children}) {
  const [mounted,setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  } , [])
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>

}