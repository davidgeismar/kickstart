'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we are getting our deployed instance of campaignFactory on the rinkeby network
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xD9eA9d85d04F14a1ED2E11c50F3F1AD69E73405D');

exports.default = instance;