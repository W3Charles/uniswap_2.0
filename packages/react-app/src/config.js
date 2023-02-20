import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x6888dcd3050d7d0cd97685178d82d000a34652cde31484a7abb867797695df4c"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/2rIwMR8DX0SxVV4QdV-04Ipaa-cTsw2T",
  },
};