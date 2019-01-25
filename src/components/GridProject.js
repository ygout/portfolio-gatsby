import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

export default class GridProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.projects,
    }
  }
  
  render() {
    return (
      <section className="containe margin-middle">
        <div className="row align-items-center">
          <ProjectCard></ProjectCard>
        </div>
      </section>
    )
  }
}
