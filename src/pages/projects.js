import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import GridProject from '../components/GridProject/GridProject'

const ProjectPage = () => (
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
    <GridProject></GridProject>
    

        

  </Layout>
)

export default ProjectPage
