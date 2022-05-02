import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Logo from '../../images/logo.png';

const Login = () => {

    const handleLogInSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={6} md={6} sm={12} className="p-5 m-auto center">
                        
                        <img className='w-100' src={Logo} alt="Logo" />
                        {/* <p className='fw-bold mt-2 p-3'><small 
                            style={{
                            color: 'gray',
                                backgroundColor: 'yellow'
                            }}>We are here 24//7 for your care</small></p> */}
                    
                    </Col> 
                    <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                        <h1 className="text-primary mt-5 p-3 text-center rounded">Medicalic LogIn</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                  We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Text className="text-muted">
                                  Your Password Must be 8 character Long.
                                </Form.Text>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            
                            <Button onSubmit={handleLogInSubmit} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <h6 className="mt-5 p-4 text-center text-secondary ">Copyright © 2022 Medicalic - Hospital Management. All Rights Reserved.</h6>
                </Row>
            </Container>
        </>
    );
};

export default Login;