import Web3 from 'web3';
// we use metamask provider to connect to the rinkeby network
let web3;
if (typeof window !== 'undefined' && window.web3 !== 'undefined'){
  // browser and metamask is running
   web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/ef1a3e152a2a4d4d8829e42eb9000416'
  )
  web3 = new Web3(provider);
}
// const web3 = new Web3(window.web3.currentProvider);

export default web3;
