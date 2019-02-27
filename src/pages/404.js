import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Container } from 'reactstrap';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <section className="mt-5">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Container>
  </Layout>
)

export default NotFoundPage
