import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CarouselProject from '../components/Carousel/CarouselProject'
import { Container } from 'reactstrap'
const isEmpty = require('lodash.isempty')

export const ProjectPageTemplate = ({
  title,
  description,
  tools,
  langages,
  gallery,
  results,
  srcFile,
}) => {
  let linksFile
  if (typeof srcFile !== 'undefined' && srcFile.length > 0) {
    linksFile = srcFile.map(item => {
      if (!isEmpty(item)) {
        return (
          <>
            <a
              rel="noopener noreferrer"
              target="_blank"
              key={item.srcFile.url}
              href={item.srcFile.url}
            >
              {' '}
              {item.srcFile.label}
            </a>
            <br />
          </>
        )
      }else {
        return (<> </>);
      }
    })
  } else {
    linksFile = <p />
  }

  return (
    <>
      <Container>
        {gallery ? <CarouselProject className="mt-5" items={gallery} /> : null}
        <h1 className="text-center mt-5 mb-5">{title}</h1>
        <div className="row mt-3 mb-5">
          <div>
            <h3 className="mb-4">Description</h3>
            <div
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="row  mb-5">
          <div>
            <h3 className="mb-4">Projet details</h3>
            <ul>
              <li>{tools}</li>
              <li>{langages}</li>
            </ul>
          </div>
        </div>
        <div className="row  mb-5">
          <div>
            <h3 className="mb-4">Bilan</h3>
            <p>{results} </p>
          </div>
        </div>
        <div className="row  mb-5">
          <div>
            <h3 className="mb-4">Sources</h3>
            {linksFile}
          </div>
        </div>
      </Container>
    </>
  )
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('data.markdownRemark', data.markdownRemark.fields.descriptionHtml)
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
        srcFile={frontmatter.src_file}
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
        src_file {
          srcFile {
            url
            label
          }
        }
      }
    }
  }
`
