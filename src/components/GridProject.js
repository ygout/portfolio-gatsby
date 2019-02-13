import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import { graphql, StaticQuery } from 'gatsby'
import TagsProject from '../components/TagsProject'

export default class GridProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.props.projects,
    }

    this.onFilter = this.onFilter.bind(this)
  }
  onFilter(value) {
    console.log('click', value)
    console.log('this.props.projects', this.props.projects)
    if (value === 'TOUS') {
      this.setState({
        projects: this.props.projects,
      })
    } else {
      const projects = this.props.projects.filter(project => {
        return project.node.frontmatter.category === value
      })

      this.setState({
        projects: projects,
      })
    }
  }
  render() {
    return (
      <>
        <StaticQuery
          query={graphql`
            query {
              allFile(filter: { sourceInstanceName: { eq: "categories" } }) {
                edges {
                  node {
                    id
                    childMarkdownRemark {
                      frontmatter {
                        value
                        title
                      }
                    }
                  }
                }
              }
            }
          `}
          render={categoriesData => (
            <TagsProject
              onFilter={this.onFilter}
              dataCategories={categoriesData}
            />
          )}
        />
        <section className="containe margin-middle">
          <div className="row align-items-center">
            {this.state.projects.map((project, i) => (
              <ProjectCard key={project.node.id} project={project.node} />
            ))}
          </div>
        </section>
      </>
    )
  }
}
