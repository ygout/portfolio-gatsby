import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Button, Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col } from 'reactstrap';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invalid: null,
            valid: null,
        }
        this.handleChangeMail = this.handleChangeMail.bind(this);
    }
    handleChangeMail(event) {

        const emailValue  = event.target.value;
        var validMailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validMailreg.test(emailValue.toLowerCase())){
            this.setState({
                invalid: false,
                valid: true,
            })
        }else {
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
                    <Form name="contact-form" method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="mt-5">
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
                        <Button className="send-button">Envoyer</Button>
                    </Form>

                </Container>
            </Layout>
        );
    }
}