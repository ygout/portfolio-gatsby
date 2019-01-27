import React from 'react'
import './ProjectCard.css'
// import { withPrefix } from 'gatsby'
import Img from "gatsby-image"

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('project', this.props.project)
    console.log('this.props.project.thumbnail', this.props.project.thumbnail)
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
      <Img fluid={this.props.project.thumbnail.childImageSharp.fluid} alt="cool stuff." />
        {/* <img
          className="image"
          src={withPrefix(this.props.project.thumbnail)}
        /> */}
        <a
          className="overlay"
          href="https://unsplash.com/photos/_Ajm-ewEC24"
          target="_blank"
        >
          <div className="text">
            <p className="title">Firework</p>

            <div className="divider" />

            <p className="sub-title">Stefanie McCabe</p>
          </div>
        </a>
      </div>
    )
  }
}
