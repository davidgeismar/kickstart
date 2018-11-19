const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/compiledFactory.json')

const provider = new HDWalletProvider(

)
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
  .deploy({data: compiledFactory.bytecode})
  .send({gas: '1000000', from: accounts[0]})
}
