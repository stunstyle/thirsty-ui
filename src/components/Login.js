import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Login() {
    return (
        <Form>
            <FormGroup>
                <Label for="email">email</Label>
                <Input type="email" name="email" id="email" placeholder="john.doe@mail.com" />
            </FormGroup>
            <FormGroup>
                <Label for="password">password</Label>
                <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <Button>Login</Button>
        </Form>
    );
}
export default Login;