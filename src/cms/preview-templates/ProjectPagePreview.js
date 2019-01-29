import React from 'react'
import { ProjectPageTemplate } from '../../templates/project-page'

const ProjectPagePreview = ({ entry, widgetFor }) => (
  <ProjectPageTemplate
    title={entry.getIn(['data','title'])}
    description={entry.getIn(['data', 'description'])}
    tools={entry.getIn(['data', 'outils'])}
    langages={entry.getIn(['data', 'langages'])}
    gallery=""
    results={entry.getIn(['data', 'results'])}
    thumbnail={entry.getIn(['data', 'thumbnail'])}
  />
)

export default ProjectPagePreview