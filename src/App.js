import React, {Component} from 'react';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import {Tabs, Tab} from 'react-bootstrap';

//import views over here
import CreateAssessment from './components/createAssessment';
import ViewAssessment from './components/viewAssessment';


import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
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
