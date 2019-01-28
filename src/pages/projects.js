import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GridProject from '../components/GridProject'
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
       <GridProject projects = {data.allMarkdownRemark.edges}></GridProject>
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
          slug
        }
      }
    }
  }
}
`