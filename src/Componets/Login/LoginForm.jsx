import React from "react";
import  {Form, Button} from "react-bootstrap"
import './LoginForm.scss'
function LoginForm() {
  return (
    <Form className="text-start">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control className="border-0 border-bottom border-primary" type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="border-0 border-bottom border-primary" type="password" placeholder="Password" />
      </Form.Group>

      <Button id="gradiant-bg" className="border-0 rounded-3 w-100 " variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
