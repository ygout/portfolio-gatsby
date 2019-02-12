import React from 'react'

export default class TagsProject extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: this.props.dataCategories.allFile.edges,
    }
  }

  render() {
    let category
    console.log('state', this.state.categories)

    const tags = this.state.categories.map(node => {
      category = node.node.childMarkdownRemark.frontmatter;
      return (
        <TagProject
          key={category.value}
          value={category.value}
          title={category.title}
          onFilter={this.props.onFilter}
        />
      )
    })
    return (
      <section className="containe margin-middle">
        <div className="row">
          <div className="col text-center">
            <button
              aria-pressed="true"
              data-toggle="button"
              className="mr-2 btn btn-dark"
            >
              Tous
            </button>
            {tags}
          </div>
        </div>
      </section>
    )
  }
}

export const TagProject = ({ value, title, onFilter }) => {
  return (
    <>
      <button
        aria-pressed="true"
        data-toggle="button"
        className="mr-2 btn btn-dark"
        onClick={onFilter}
      >
        {title}
      </button>
    </>
  )
}
