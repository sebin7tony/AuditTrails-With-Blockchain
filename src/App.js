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

    };
    this.createAuditTrail = this.createAuditTrail.bind(this);
  }

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    this.web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await this.web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    this.auditTrailList = new this.web3.eth.Contract(TRAIL_LIST_ABI, TRAIL_LIST_ADDRESS)
    const trailCount = await this.auditTrailList.methods.trailCount().call();
    this.setState({ trailCount })
    for (var i = 1; i <= trailCount; i++) {

      const entry = await auditTrailList.methods.trails(i).call();
      console.log(entry);
      const newEntry = {name : entry['name'],date : entry['date']}


      this.setState({
        entryList: [...this.state.entryList, newEntry]
      })
    }
    console.log(this.state.entryList);
  }

  async createAuditTrail(data) {
    console.log('the audit trail values passed',data, this.state.entryList);
    const addEntry = await this.auditTrailList.methods.addEntry(data.company,data.timePeriod).call();
  }

  render(){
    return (
      <div className="App">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="create-assessment" title="Create Assessment">
            <CreateAssessment createAuditTrail={this.createAuditTrail} />
          </Tab>
          <Tab eventKey="profile" title="View Audit trails">
            <ViewAudittrails entryList = {this.state.entryList}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default App;
