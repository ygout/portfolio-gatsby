import React from 'react'

const TagsProject = ({ data }) => {
  const { edges: categories } = data.allFile
  let category;
  return (
    <section className="containe margin-middle">
      <div className="row align-items-center">
        {categories.map((node, i) => {
          category = node.node.childMarkdownRemark.frontmatter;
         console.log('e', category)
        })}
      </div>
    </section>
  )
}
export const Tag = ({ value, title }) => {
  console.log('dataTag', value)
  console.log('dataTag', title)
  return (
    <>
      {' '}
      <div />
    </>
  )
}
export default TagsProject
