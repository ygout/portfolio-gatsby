import React from 'react'
import { ProjectPageTemplate } from '../../templates/project-page'

const ProjectPagePreview = ({ entry, widgetFor }) => {

  const entryGallery = entry.getIn(['data', 'gallery']);
  const gallery = entryGallery ? entryGallery.toJs(): [];
  console.log('entryGallery', entryGallery);
  console.log('gallery', gallery);
  return (
    <ProjectPageTemplate
      title={entry.getIn(['data','title'])}
      description={entry.getIn(['data', 'description'])}
      tools={entry.getIn(['data', 'tools'])}
      langages={entry.getIn(['data', 'langages'])}
      results={entry.getIn(['data', 'results'])}
      gallery={gallery}
      thumbnail={entry.getIn(['data', 'thumbnail'])}
    />
  )
}
  

export default ProjectPagePreview