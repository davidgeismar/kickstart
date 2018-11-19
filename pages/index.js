import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory'
import Layout from '../components/layout'


class CampaignIndex extends Component {
  // check this getinitialprops
  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    console.log(campaigns);
    return { campaigns };
  }

  renderCampaigns(){
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign </a>,
        fluid: true
      }
    })
    console.log(items);
    return <Card.Group items={items}/>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Button
            floated="right"
            content="Create campaign"
            icon="add"
            primary={true}
          />
          {this.renderCampaigns()}
        </div>
      </Layout>
    )

  }
}

export default CampaignIndex;
