import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

export default class GridProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.props.projects,
    }
  }

  render() {
    return (
      <section className="containe margin-middle">
        <div className="row align-items-center">
          {this.state.projects.map((project, i) => (
            <ProjectCard key={project.node.id} project={project.node} />
          ))}
        </div>
      </section>
    )
  }
}
