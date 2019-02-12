import React from 'react'

const TagsProject = ({ data }) => {
  const { edges: categories } = data.allFile
  let category
  return (
    <section className="containe margin-middle">
      <div className="row">
        <div className="col text-center">
          <button
            active
            aria-pressed="true"
            data-toggle="button"
            className="mr-2 btn btn-dark"
          >
            Tous
          </button>
          {categories.map((node, i) => {
            category = node.node.childMarkdownRemark.frontmatter
            return (
              <TagProject
                key={category.value}
                value={category.value}
                title={category.title}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export const TagProject = ({ value, title }) => {
  return (
    <>
      <button
        aria-pressed="true"
        data-toggle="button"
        className="mr-2 btn btn-dark"
      >
        {title}
      </button>
    </>
  )
}
export default TagsProject
