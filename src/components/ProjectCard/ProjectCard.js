import React from 'react'
import './ProjectCard.css'

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.project,
        }
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
                <img
                    className="image"
                    src="http://www.bigart.design/images/other/stephanie-mccabe-24620-600x600.jpg"
                />
                <a
                    className="overlay"
                    href="https://unsplash.com/photos/_Ajm-ewEC24"
                    target="_blank"
                >
                    <div className="text">
                        <p className="title">Firework</p>

                        <div className="divider" />

                        <p className="sub-title">Stefanie McCabe</p>
                    </div>
                </a>
            </div>

        )
    }
}
