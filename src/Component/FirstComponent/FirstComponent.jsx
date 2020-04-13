import React from 'react';
import { Navbar, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Tab Heading1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Tab Heading1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">
                                    Tab Heading1
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </div>
                <Container className='containerStyle'>
                    <Row className="firstComp">
                        <Col>Movement Information</Col>
                        <Col>Routing Information</Col>
                    </Row>
                    <Row >
                        <Col>
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label> Transpots mode</Form.Label>
                                            <Row className='transportMode'>
                                                <Form.Check
                                                    type="radio"
                                                    label="Rail"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios3"
                                                /> &nbsp;
                                                <Form.Check
                                                    type="radio"
                                                    label="Road"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios3"
                                                />
                                            </Row>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Origin Country</Form.Label>
                                            <Form.Control as="select" >
                                                <option value="" disabled>
                                                    ----Select Ones----
                                                 </option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Origin Country</Form.Label>
                                            <Form.Control as="select" >
                                                <option value="" disabled>
                                                    ----Select Ones----
                                                 </option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Origin Country</Form.Label>
                                            <Form.Control as="select" >
                                                <option value="" disabled>
                                                    ----Select Ones----
                                                 </option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>

                                <Col>
                                    <Form>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Transit time from</Form.Label>
                                            <Form.Control type="text" placeholder="Transit time from" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Transit time to</Form.Label>
                                            <Form.Control type="text" placeholder="Transit time to" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Transit time unit</Form.Label>
                                            <Form.Control as="select" >
                                                <option value="" disabled>
                                                    ----Select Ones----
                                                 </option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Transit time description</Form.Label>
                                            <Form.Control type="text" placeholder="Transit time description" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: '10px' }}>
                        <Col>
                            <Row>
                                Status  &nbsp;
                                <Form.Check
                                    type="radio"
                                    label="Active"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                                 &nbsp;
                                <Form.Check
                                    type="radio"
                                    label="Inactive"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Row>
                        </Col>
                        <Col >
                            <Button variant="primary" type="submit">
                                Submit
                             </Button> &nbsp;
                            <Button variant="primary" type="submit">
                                Submit & New
                             </Button> &nbsp;
                            <Button variant="danger" type="submit">
                                Cancel
                             </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FirstComponent;