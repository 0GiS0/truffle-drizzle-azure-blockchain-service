const path = require('path'),
  Web3 = require("web3"),
  stark = "https://stark.blockchain.azure.com:3200/CTmo00mPUsaCVqOF_dcZPIl9",
  myAccount = "0xc9c3748c626d013045C32447b8D834E76F2817E5",
  myPassword = "Passw0rd";


module.exports = {
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'),

  networks: {
    azureblockchain: {
      provider: (() => {
        const AzureBlockchainProvider = new Web3.providers.HttpProvider(stark);
        const web3 = new Web3(AzureBlockchainProvider);

        web3.eth.personal.unlockAccount(myAccount, myPassword);

        return AzureBlockchainProvider;

      })(),

      network_id: '*',
      gas: 0,
      gasPrice: 0,
      from: myAccount
    }
  },
  compilers: {
    solc: {
      version: "0.5.4"
    }
  }
};
