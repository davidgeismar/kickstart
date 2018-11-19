'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we use metamask provider to connect to the rinkeby network
var web3 = void 0;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/ef1a3e152a2a4d4d8829e42eb9000416');
  web3 = new _web2.default(provider);
}
// const web3 = new Web3(window.web3.currentProvider);

exports.default = web3;