import React from 'react'
import { ProjectPageTemplate } from '../../templates/project-page'
import remark from 'remark';
import remarkHTML from 'remark-html';
// const remark = require('remark')
// const remarkHTML = require('remark-html')

const ProjectPagePreview = ({ entry, widgetFor }) => {

  const entryGallery = entry.getIn(['data', 'gallery']);
  const gallery = entryGallery ? entryGallery.toJS(): [];

  const entryDescription = entry.getIn(['data', 'description']);
  const description = remark()
  .use(remarkHTML)
  .processSync(entryDescription)
  .toString()
  return (
    <ProjectPageTemplate
      title={entry.getIn(['data','title'])}
      description={description}
      tools={entry.getIn(['data', 'tools'])}
      langages={entry.getIn(['data', 'langages'])}
      results={entry.getIn(['data', 'results'])}
      gallery={gallery}
      thumbnail={entry.getIn(['data', 'thumbnail'])}
    />
  )
}
  

export default ProjectPagePreview