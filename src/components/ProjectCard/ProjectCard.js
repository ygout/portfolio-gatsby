import React from 'react'
import './ProjectCard.css'
import { Link } from 'gatsby'

export default class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 mr-4 cell-container">
        <img alt={project.frontmatter.title} className="image" src={project.frontmatter.thumbnail} />
        <Link
          className="overlay"
          to={project.fields.slug}
          target="_blank" rel="noopener noreferrer"
        >
          <div className="text">
            <p className="sub-title">{project.frontmatter.title}</p>
          </div>
        </Link>
      </div>
    )
  }
}
