import React from 'react'
import './ProjectCard.css'
import { Link } from 'gatsby'

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
 
    const { project } = this.props;
    console.log('project', project);
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
        <img className="image" src={project.frontmatter.thumbnail} />
        <Link
          className="overlay"
          to={project.fields.slug}
          target="_blank"
        >
          <div className="text">
            <p className="sub-title">{project.frontmatter.title}</p>
          </div>
        </Link>
      </div>
    )
  }
}
