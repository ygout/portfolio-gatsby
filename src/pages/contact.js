import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ContactForm from '../components/ContactFrom'
import ContactCard from '../components/ContactCard/ContactCard'
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
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
                    `ygout`,
                    `full-stack`,
                    `fullstack`,
                    `full stack`,
                    `Full Stack`,
                    `fullStack`,
                    `back-end`,
                    `developper`,
                    `developpeur`,
                    `france`,
                    `lyon`,
                    `react`,
                    `gatsby`,
                    `yohann`,
                    `goutaret`,
                    `ygout`,
                    `Yohann`,
                    `Goutaret`,
                    `FullStack`,
                ]}
            />
            <Container className="mt-5">
                <h1 className="text-center page-title">Me contacter</h1>
                <Row>
                    <div className="col-md-4"> <ContactCard /> </div>
                    <div className="col-md-8"><ContactForm /></div>
                </Row>
            </Container>
        </Layout>
    )
}

export default ContactPage;
