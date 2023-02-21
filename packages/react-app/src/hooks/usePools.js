import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { useConfig } from '@usedapp/core';

import { ROUTER_ADDRESS } from '../config';
import { getFactoryInfo, getRouterInfo } from '../utils';