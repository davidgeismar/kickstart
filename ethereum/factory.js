import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';
// we are getting our deployed instance of campaignFactory on the rinkeby network
const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  '0xD9eA9d85d04F14a1ED2E11c50F3F1AD69E73405D'
);


export default instance
