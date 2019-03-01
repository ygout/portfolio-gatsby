import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Contact from '../components/Contact'


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
                ]}
            />
            <Contact />
        </Layout>
    )
}

export default ContactPage;
