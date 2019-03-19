import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container } from 'reactstrap';
import { MdEmail } from 'react-icons/md'

export default () => (
    <Layout>
        <SEO
            title="envoye"
            keywords={[
                `portoflio`,
                `contact`,
                `react`,
                `gatsby`,
                `yohann`,
                `goutaret`,
                `me contacter`,
                `merci`,
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
        <Container className="mt-5 text-center">
            <div>
                <h1>Merci !</h1>
                <h5>Votre message a bien été envoyé</h5>
                <h1><MdEmail /></h1>
            </div>
        </Container>

    </Layout>

);