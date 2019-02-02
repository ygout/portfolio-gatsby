import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CarouselProject from '../components/Carousel/CarouselProject'
import { Container } from 'reactstrap'

export const ProjectPageTemplate = ({
  title,
  description,
  tools,
  langages,
  gallery,
  results,
}) => {
  console.log('description', description);
  console.log('la gallery', gallery);
  return (
    <>
      <Container>
        {gallery ? <CarouselProject className="mt-5" items={gallery} /> : null}
      
        <div className="row mt-3">
          <div>
            <h3>Description</h3>
            <div id="___gatsby" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        <div className="row">
          <div>
            <h3>Projet details</h3>
            <ul>
              <li>{tools}</li>
              <li>{langages}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div>
            <h3>Bilan</h3>
            <p>{results} </p>
          </div>
        </div>
      </Container>
    </>
  )
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('data.markdownRemark', data.markdownRemark.fields.descriptionHtml);
  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        description={data.markdownRemark.fields.descriptionHtml}
        tools={frontmatter.tools}
        langages={frontmatter.langages}
        gallery={frontmatter.gallery}
        results={frontmatter.results}
        thumbnail={frontmatter.thumbnail}
      />
    </Layout>
  )
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        descriptionHtml
      }
      frontmatter {
        title
        thumbnail
        tools
        results
        category
        langages
        gallery
        description
      }
    }
  }
`
