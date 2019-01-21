import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../images/avatar.png' // Tell Webpack this JS file uses this image
import { Container, Row, Col, Jumbotron } from 'reactstrap'
const IndexPage = () => (
  <Layout>
    <SEO
      title="Accueil"
      keywords={[
        `portoflio`,
        `accueil`,
        `react`,
        `gatsby`,
        `yohann`,
        `goutaret`,
      ]}
    />
    <Container className="text-center mt-5">
      <img className="img-fluid mb-5 d-block mx-auto image-profile" src={avatar} />
      <h1 className=" mb-0">Yohann Goutaret</h1>
      <hr className="start-light"></hr>
      <h2 class="font-weight-light mb-0">Développeur FullStack - Back-end</h2>
    </Container>
    

        

  </Layout>
)

export default IndexPage
