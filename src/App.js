import React, {Component} from 'react';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import Web3 from 'web3'
import {Tabs, Tab} from 'react-bootstrap';
import { TRAIL_LIST_ABI, TRAIL_LIST_ADDRESS } from './config'

//import views over here
import CreateAssessment from './components/createAssessment';
import ViewAssessment from './components/viewAssessment';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
      account : '',
      entryList : [],
      trailCount : 0
    };
  }

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const auditTrailList = new web3.eth.Contract(TRAIL_LIST_ABI, TRAIL_LIST_ADDRESS)
    const trailCount = await auditTrailList.methods.trailCount().call()

    this.setState({ trailCount })
    for (var i = 1; i <= trailCount; i++) {
      const entry = await auditTrailList.methods.trails(i).call();
      console.log(entry);

      this.setState({
        entryList: [...this.state.entryList, entry]
      })
    }
    console.log(this.state.entryList);
    
  }

  render(){
    return (
      <div className="App">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="home" title="Create Assessment">
            <CreateAssessment />
          </Tab>
          <Tab eventKey="profile" title="View Assessment">
            <ViewAssessment />
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default App;
