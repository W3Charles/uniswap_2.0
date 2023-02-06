import React, {useState, useEffect} from 'react';
import {shortenAddress, useEthers, useLookupAddress} from "@usedapp/core";

import styles from "../styles";

const WalletButton = () => {
  const {ens} = useLookupAddress();
  return (
    <div>WalletButton</div>
  )
}

export default WalletButton