import React from 'react'
import './ProjectCard.css'

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('slug?', this.props.project.fields.slug)
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
        <img className="image" src={this.props.project.frontmatter.thumbnail} />
        <a
          className="overlay"
          href={this.props.project.fields.slug}
          target="_blank"
        >
          <div className="text">
            <p className="sub-title">{this.props.project.frontmatter.title}</p>
          </div>
        </a>
      </div>
    )
  }
}
