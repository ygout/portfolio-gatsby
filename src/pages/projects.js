import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
// import GridProject from '../components/GridProject'
import { graphql } from 'gatsby';

const ProjectsPage = ({ data }) => {

  console.log('data', data);
  return (
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
      {/* {projects.map( project => (
        <GridProject></GridProject>
    ))} */}


    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          description
          thumbnail
          results
          
        }
      }
    }
  }
}
`