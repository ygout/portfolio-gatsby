import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import avatar from '../images/avatar.png' // Tell Webpack this JS file uses this image

const IndexPage = () => (
  <Layout>
    <SEO
      title="Accueil"
      keywords={[
        `portoflio`,
        `accueil`,
        `home`,
        `full-stack`,
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
      ]}
    />
    <section className="text-center mt-5">
      <img alt="avatar" className="img-fluid mb-5 d-block mx-auto image-profile" src={avatar} />
      <h1 className="mb-0">Yohann Goutaret</h1>
      <hr className="star-light"></hr>
      <h2 className="font-weight-light mb-0">Développeur FullStack - Back-end</h2>
      <h4 className="font-weight-light mt-4">A la recherche de nouvelles opportunités dans les régions Rhône Alpes/Drôme (Valence)</h4>
    </section>
    
  </Layout>
)

export default IndexPage
