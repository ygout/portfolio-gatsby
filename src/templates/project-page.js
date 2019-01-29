import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProjectPageTemplate = ({
  title,
  description,
  tools,
  langages,
  gallery,
  results,
  thumbnail,
}) => (
  <div className="row mt-5">
    <div className="col-md-8">
      <img className="img-responsive img-desc" src={thumbnail} alt="" />
    </div>
    <div className="col-md-4">
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Projet details</h3>
      <ul>
        <li>{tools}</li>
        <li>{langages}</li>
      </ul>
      <h3>Bilan</h3>
      <p>{results} </p>
    </div>
  </div>
)

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        tools={frontmatter.tools}
        langages={frontmatter.langages}
        gallery={frontmatter.gallery}
        results={frontmatter.results}
        thumbnail = {frontmatter.thumbnail}
      />
    </Layout>
  )
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        thumbnail
        outils
        description
        results
        category
        langages
      }
    }
  }
`
