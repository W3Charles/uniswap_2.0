import React, {useState, useEffect} from 'react';
import {shortenAddress, useEthers, useLookupAddress} from '@usedapp/core';

import styles from '../styles';

const WalletButton = () => {
  const [rendered, setRendered] = useState('');

  const {ens} = useLookupAddress();
  const {account, activateBrowserWallet, deactivate} = useEthers();

  useEffect(() => {

  }, [account, ens, setRendered])
  
  return (
    <button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.walletButton}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  );
};

export default WalletButton