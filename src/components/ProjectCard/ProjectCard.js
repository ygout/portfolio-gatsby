import React from 'react'
import './ProjectCard.css'

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
        <img className="image" src={this.props.project.thumbnail} />
        <a
          className="overlay"
          href="https://unsplash.com/photos/_Ajm-ewEC24"
          target="_blank"
        >
          <div className="text">
            <p className="sub-title">{this.props.project.title}</p>
          </div>
        </a>
      </div>
    )
  }
}
