import { Goerli } from "@usedapp/core";

/* Put this in an env file BEFORE you deploy on mainnet */
export const ROUTER_ADDRESS = "0x61b7fb401c4b3d7401df9e94193a7575f4ede526"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/2rIwMR8DX0SxVV4QdV-04Ipaa-cTsw2T",
  },
};