import React from 'react'
import './GridProject.css'

export default class GridProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.projects,
    }
  }

  render() {
    return (
      <section className="containe margin-middle">
        <div className="row align-items-center">
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
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
            <img
              className="image"
              src="http://www.bigart.design/images/other/scott-webb-258983-600x600.jpg"
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
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
            <img
              className="image"
              src="http://www.bigart.design/images/other/sticker-mule-197248-600x600.jpg"
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
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cell-container">
            <img
              className="image"
              src="http://www.bigart.design/images/other/derick-anies-120213-600x600.jpg"
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
        </div>
      </section>
    )
  }
}
