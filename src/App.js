import React, {Component} from 'react';
import './App.css';
import {Tabs, Tab} from 'react-bootstrap';

//import views over here
import CreateAssessment from './components/createAssessment';
import ViewAssessment from './components/viewAssessment';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'create-assessment',
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
          <Tab eventKey="create-assessment" title="Create Assessment">
            <CreateAssessment />
          </Tab>
          <Tab eventKey="view-assessment" title="View Assessment">
            <ViewAssessment />
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default App;
