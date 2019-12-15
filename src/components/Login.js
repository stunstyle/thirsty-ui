import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'password': '',
            validate: {
                emailState: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`username: ${this.state.email}`)
        this.sendLoginRequest();
    }

    sendLoginRequest() {

        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        xhr.withCredentials = true;
                // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            if(xhr.status == 200) {
                console.log("rayadog");
                console.log(xhr.responseText);
                window.location.assign("/");
            }
        })

        // open the request with the verb and the url
        xhr.open('POST', 'http://localhost:8080/login');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // send the request
        var params = "username=" + this.state.username + "&password=" + this.state.password;
        xhr.send(params);
    }

    render() {
        const { username, password } = this.state;
        return (
            <Container className="App">
                <h2>Sign In</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="exampleEmail"
                                placeholder="your thirsty username"
                                value={username}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    // this.validateEmail(e)
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                That's a tasty looking email you've got there.
              </FormFeedback>
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
                            <FormText>Your username is most likely your email.</FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;