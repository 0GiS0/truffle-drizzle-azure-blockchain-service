const path = require('path'),
  Web3 = require("web3"),
  stark = "https://snow.blockchain.azure.com:3200/_ALZqdJRlpwCMZDkWu7bSMfz",
  myAccount = "0xb0A3763eebA93CfAbeadd42fe270509a68B2bDB8",
  myPassword = "$Passw0rd";


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
