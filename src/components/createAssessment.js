import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function CreateAssessment() {
    return (
      <div className="form-wrapper">
        <h2>Assessment creation</h2>
        <Form>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

            </p>
            <Form.Group controlId="formComplianceControl">
                <Form.Label>Compliance Control Self Assessment</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Label>Company</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Container>
                <Row>
                    <Col>
                    <Form.Group controlId="formTimePeriod">
                        <Form.Label>Time Period</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="formBusinessUnit">
                        <Form.Label>Business Unit</Form.Label>
                        <Form.Control as="select">
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
  
  export default CreateAssessment;