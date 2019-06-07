import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3'
import {Tabs, Tab} from 'react-bootstrap';
import { TRAIL_LIST_ABI, TRAIL_LIST_ADDRESS } from './config'

//import views over here
import CreateAssessment from './components/createAssessment';
import ViewAudittrails from './components/viewAuditTrails';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      account : '',
      entryList : [],
      trailCount : 0,
      key: 'create-assessment',
      auditTrailList : null

    };
    this.createAuditTrail = this.createAuditTrail.bind(this);
    this.auditTrailList =undefined;
  }

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts);
    this.state.auditTrailList = new web3.eth.Contract(TRAIL_LIST_ABI, TRAIL_LIST_ADDRESS);
    const trailCount = await this.state.auditTrailList.methods.trailCount().call();
    this.setState({ trailCount })
  
    for (var i = 1; i <= trailCount; i++) {

      const entry = await this.state.auditTrailList.methods.trails(i).call();
      console.log(entry);
      const newEntry = {name : entry['name'],date : entry['date'],entryId: entry.id.toHexString()}

      this.setState({
        entryList: [...this.state.entryList, newEntry]
      })
    }
    console.log(this.state.entryList);
  }

  async createAuditTrail(data) {
    console.log('the audit trail values passed',data, this.state.entryList);
    this.state.auditTrailList.methods.addEntry(data.complianceControl,data.timePeriod).send({ from:  this.state.account}) 
    .once('receipt', (receipt) => {
        console.log("added", receipt);
    });
  }

  render(){
    const {auditTrailList} = this.state;
    return (
      <div className="App">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="create-assessment" title="Create Assessment">
            <CreateAssessment createAuditTrail={this.createAuditTrail}  />
          </Tab>
          <Tab eventKey="profile" title="View Audit trails">
            <ViewAudittrails entryList = {this.state.entryList} tabSelected={this.state.key} auditTrailList = {auditTrailList} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default App;
