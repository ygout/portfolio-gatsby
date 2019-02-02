import React from 'react'
import { ProjectPageTemplate } from '../../templates/project-page'

const ProjectPagePreview = ({ entry, widgetFor }) => {

  const entryGallery = entry.getIn(['data', entry]);
  const gallery = entryGallery ? entryGallery.toJs(): []
  return (
    <ProjectPageTemplate
      title={entry.getIn(['data','title'])}
      description={entry.getIn(['data', 'description'])}
      tools={entry.getIn(['data', 'outils'])}
      langages={entry.getIn(['data', 'langages'])}
      results={entry.getIn(['data', 'results'])}
      gallery={entry.getIn(['data', 'gallery'])}
      thumbnail={entry.getIn(['data', 'thumbnail'])}
    />
  )
}
  

export default ProjectPagePreview