import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProjectPageTemplate = ({
  title,
  description,
  tools,
  langages,
  gallery,
  results,
}) => (
    <div className="row">
      <div class="col-md-8">
        <img class="img-responsive" src="http://placehold.it/750x500" alt="" />
      </div>
      <div class="col-md-4">
        <h3>Description</h3>
        <p>{ description }</p>
        <h3>Projet details</h3>
        <ul>
          <li>{ outils }</li>
          <li>{ langages }</li>

        </ul>
        <h3>Bilan</h3>
        <p>{ results } </p>
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
      />
    </Layout>
  )
}


export default ProjectPage

    // export const projectPageQuery = graphql`
//   query ProjectPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//         main {
//           heading
//           description
//           image1 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image2 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image3 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1075, quality: 72) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         testimonials {
//           author
//           quote
//         }
//         full_image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         pricing {
//           heading
//           description
//           plans {
//             description
//             items
//             plan
//             price
//           }
//         }
//       }
//     }
//   }
// `
