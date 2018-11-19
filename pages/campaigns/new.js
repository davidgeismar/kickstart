import React, {Component} from 'react';
import { Button, Form, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory'
import Layout from '../../components/layout'
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  // check this getinitialprops

  state = {
    minimumContribution: 0,
    errorMessage: '',
    loading: false
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, errorMessage: ''});
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution).send({
        from: accounts[0]
      });
    } catch(err){
      console.log(err);
      this.setState({errorMessage: err.message})
    }
    this.setState({loading: false});

  }

  render() {
    return (
      <Layout>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
          <h3>Create a Campaign</h3>
          <Form onSubmit={this.handleSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>
                Minimum contribution (wei)
              </label>
              <Input
                type='number'
                value={this.state.minimumContribution}
                onChange={event => this.setState({minimumContribution: event.target.value})}
                labelPosition="right"
                label="wei"
              />
            </Form.Field>
            <Message error header="Oops" content={this.state.errorMessage}/>
            <Button
              type='submit'
              content="Create"
              loading={this.state.loading}
              primary={true}
            />
          </Form>
        </div>
      </Layout>
    )

  }
}

export default CampaignNew;
