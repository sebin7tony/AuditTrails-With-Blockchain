import React,{Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


class CreateAssessment extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            complianceControl: "",
            timePeriod: "3",
            company:"LibraryWorkflow",
            businessUnit:""
        };
        this.handleComplianceControl = this.handleComplianceControl.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
        this.handleTimePeriod = this.handleTimePeriod.bind(this);
        this.handleBusinessUnit = this.handleBusinessUnit.bind(this);
    }

    sendAssessment(event) {
        event.preventDefault();
       // let dummystate = {...this.state};
        let values = Object.assign({}, this.state);
 
        this.setState({
            complianceControl: ""
        });
        this.props.createAuditTrail(values);
        //send to web3 req
    }

    handleComplianceControl(event) {
        this.setState({complianceControl: event.target.value});
    }

    handleCompany(event) {
       this.setState({company: event.target.value});
    }
    handleTimePeriod(event) {
        this.setState({timePeriod: event.target.value});
    }

    handleBusinessUnit(event) {
        this.setState({businessUnit: event.target.value});
    }
    render() {
        return (
        <div className="form-wrapper">
            <h2>Assessment creation</h2>
            <Form  onSubmit={this.sendAssessment.bind(this)}> 
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                </p>
                <Form.Group controlId="formComplianceControl">
                    <Form.Label>Compliance Control Self Assessment name</Form.Label>
                    <Form.Control type="text" placeholder="Enter compliance name" onChange={this.handleComplianceControl} value={this.state.complianceControl} />
                </Form.Group>
                <Form.Group controlId="formCompany">
                    <Form.Label>Workflow</Form.Label>
                    <Form.Control as="select"  onChange={this.handleCompany} value={this.state.company}>
                        <option>LibraryWorkflow</option>    
                        <option>RiskWorkflow</option>
                        <option>AuditWorkflow</option>
                        <option>ERMWorkflow</option>
                        <option>DefaultWorkflow</option>
                    </Form.Control>
                </Form.Group>
                <Container>
                    <Row>
                        <Col>
                        <Form.Group controlId="formTimePeriod">
                            <Form.Label>Object Type ID</Form.Label>
                            <Form.Control as="select" onChange={this.handleTimePeriod} value={this.state.timePeriod}>
                                <option>3</option>
                                <option>14</option>
                                <option>19</option>
                                <option>25</option>
                                <option>34</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="formBusinessUnit">
                            <Form.Label>Business Unit</Form.Label>
                            <Form.Control as="select" onChange={this.handleBusinessUnit}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>

        </div>
        );
    }
  }
  
  export default CreateAssessment;