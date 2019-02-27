import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Button, Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col } from 'reactstrap';
import Recaptcha from "react-google-recaptcha";
import { navigateTo } from "gatsby-link";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
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
    }
    handleRecaptcha = value => {
        this.setState({ "g-recaptcha-response": value });
    };

    handleChangeMail(event) {

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
            <Layout>
                <SEO
                    title="Contact"
                    keywords={[
                        `portoflio`,
                        `contact`,
                        `react`,
                        `gatsby`,
                        `yohann`,
                        `goutaret`,
                        `me contacter`,
                    ]}
                />
                <Container className="mt-5">
                    <h1 className="text-center page-title">Me contacter</h1>
                    <Form name="contact-form" method="POST"
                        data-netlify="true"
                        action="/"
                        className="mt-5">
                        
                        <noscript>
                            <p>This form won’t work with Javascript disabled</p>
                        </noscript>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">Prénom</Label>
                                    <Input type="text" name="firstName" id="firstName"></Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Nom</Label>
                                    <Input type="text" name="name" id="name"></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input onChange={this.handleChangeMail} valid={this.state.valid} invalid={this.state.invalid} name="email" id="email" placeholder="name@example.com" />
                            <FormFeedback>Email invalide </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Votre message</Label>
                            <Input type="textarea" name="message" id="message" />
                        </FormGroup>
                        <Recaptcha
                            ref="recaptcha"
                            sitekey={RECAPTCHA_KEY}
                            onChange={this.handleRecaptcha}
                        />
                        <Button type="submit" className="send-button">Envoyer</Button>
                    </Form>

                </Container>
            </Layout>
        );
    }
}