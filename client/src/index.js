import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Drizzle } from 'drizzle';
import TimeControl from './contracts/TimeControl.json';

const options = {
    contracts: [TimeControl],
    web3: {
        fallback: {
            type: 'ws',
            url: 'wss://stark.blockchain.azure.com:3300/CTmo00mPUsaCVqOF_dcZPIl9'
        }
    }
};

const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));