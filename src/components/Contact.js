import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col } from 'reactstrap';
import { MdSend } from 'react-icons/md'
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
console.log('RECAPTCHA_KEY', RECAPTCHA_KEY);
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
export default class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invalid: null,
            valid: null,
        }
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleRecaptcha = this.handleRecaptcha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleRecaptcha(value) {
        this.setState({ "g-recaptcha-response": value });
    };
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

        // Validation email
        if (event.target.name === 'email') {
            console.log('Its mail change')
            this.handleChangeMail(event);
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.valid === true) {
            const form = event.target;
            fetch("/contact?no-cache=1", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": form.getAttribute("name"),
                    ...this.state
                })
            })
                .then(() => navigateTo(form.getAttribute("action")))
                .catch(error => alert(error));
        } else {
            this.setState({
                invalid: true,
                valid: false,
            })
        }

    }

    handleChangeMail(event) {
        console.log('handleChangeMail')
        const emailValue = event.target.value;
        var validMailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validMailreg.test(emailValue.toLowerCase())) {
            this.setState({
                invalid: false,
                valid: true,
            })
        } else {
            this.setState({
                invalid: true,
                valid: false,
            })
        }
    }
    render() {
        return (
            <Container className="mt-5">
                <h1 className="text-center page-title">Me contacter</h1>
                <Form name="contact-form" method="POST"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    className="mt-5"
                    onSubmit={this.handleSubmit}
                    action="/thanks"
                >

                    <input type="hidden" name="form-name" value="contact-form" />
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="firstName">Prénom</Label>
                                <Input onChange={this.handleChange} type="text" name="firstName" id="firstName" required></Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Nom</Label>
                                <Input onChange={this.handleChange} type="text" name="name" id="name" required></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={this.handleChange} valid={this.state.valid} invalid={this.state.invalid} name="email" id="email" placeholder="name@example.com" />
                        <FormFeedback>Email invalide </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Votre message</Label>
                        <Input onChange={this.handleChange} type="textarea" name="message" id="message" required />
                    </FormGroup>
                    <Recaptcha
                        ref="recaptcha"
                        sitekey={RECAPTCHA_KEY}
                        onChange={this.handleRecaptcha}
                    />
                    <Button className="send-button mt-2">Envoyer <MdSend /></Button>
                </Form>

            </Container>
        );
    }
}