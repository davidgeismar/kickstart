// to connect to rinkeby network
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./build/CampaignFactory');

const provider = new HDWalletProvider(
  'again meadow riot riot village tell aerobic super favorite window approve motion',
  'https://rinkeby.infura.io/v3/ef1a3e152a2a4d4d8829e42eb9000416'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();
