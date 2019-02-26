import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'

export default class TimeLineElement extends React.Component {
    render() {
        const experience = this.props.experience.node.childMarkdownRemark.frontmatter;
        console.log('experience', experience)
        const descriptionhtml = remark()
            .use(remarkHTML)
            .processSync(experience.description)
            .toString();
        console.log('description', descriptionhtml)
        return (
            <>
                <h3 className="vertical-timeline-element-title">
                    {experience.job}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    {experience.place + ", " + experience.company}
                </h4>
                <div id="___gatsby" dangerouslySetInnerHTML={{ __html: descriptionhtml }}>
                </div>
            </>
        )
    }
}