import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import GridProject from '../components/GridProject'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

const ProjectsPage = ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <SEO
        title="Projets"
        keywords={[
          `portoflio`,
          `accueil`,
          `react`,
          `gatsby`,
          `yohann`,
          `goutaret`,
        ]}
      />
      <Container className="mt-5">
        <h1 className="text-center page-title">Mes projets</h1>
        {data ? <GridProject projects={data.allMarkdownRemark.edges} /> : null}
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            thumbnail
          }
        }
      }
    }
  }
`
