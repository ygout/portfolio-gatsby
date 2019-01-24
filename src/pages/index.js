import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../images/avatar-circle-B.png' // Tell Webpack this JS file uses this image
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
    <section className="text-center mt-5">
      <img className="img-fluid mb-5 d-block mx-auto image-profile" src={avatar} />
      <h1 className="mb-0">Yohann Goutaret</h1>
      <hr className= "star-light"></hr>
      <h2 className="font-weight-light mb-0">Développeur FullStack - Back-end</h2>
    </section>
    

        

  </Layout>
)

export default IndexPage
