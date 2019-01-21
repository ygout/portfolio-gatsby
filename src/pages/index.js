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
    <Jumbotron className = "mt-5">
      <Row>
        <Col className="col-md-3 col-md-offset-1 text-center">
          <div className="panel panel-default">
            <div className="panel-body">
              <img className="img-responsive" src={avatar} />
            </div>
          </div>
        </Col>
        <Col className="col-md-8">
          <h1 class="welcomeText heading" id="bla">
            Yohann Goutaret
          </h1>
        </Col>
        <h3 class="welcomeText headingInfo">Développeur FullStack</h3>
      </Row>
    </Jumbotron>

    <h3 class="introBloc">
      <span class="glyphicon glyphicon-user" /> Qui suis-je?
    </h3>
    <Jumbotron>
      <Row>
        <div align="justify">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Petite présentation</h3>
              <h3 class="panel-title" />
            </div>
            <div class="panel-body">
              <p class="font21">
                Je m’appelle Yohann GOUTARET j’ai 26 ans et je suis Développeur
                FullStack en poste actuellement.
              </p>
              <p class="font21">
                Passionné par le monde informatique je souhaite mettre à profit
                mes compétences en développement d'application web et logiciel.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Jumbotron>
  </Layout>
)

export default IndexPage
