import React, { Component } from 'react'
import LightboxProject from '../Carousel/LightboxProject'
import Slider from 'react-slick'

class CarouselProject extends Component {
  constructor(props) {
    super(props)
    if (this.props.items.length > 0) {
      this.props.items.forEach((item, i) => {
        this.props.items[i] = {
          src: item,
        }
      })
      this.items = this.props.items
    } else {
      this.items = []
    }
    this.state = {
      lightboxIsOpen: false,
      lightboxIndex: 0,
    }
    // Bind the this context to the handler function
    this.closeLightBoxProject = this.closeLightBoxProject.bind(this)
    this.handleOnclickImg = this.handleOnclickImg.bind(this)

    this.gotoPreviousLightBoxProject = this.gotoPreviousLightBoxProject.bind(this)
    this.gotoNextLightBoxProject = this.gotoNextLightBoxProject.bind(this)
  }
  handleOnclickImg(index) {
    console.log('index', index)
    console.log(this.state)
    this.setState({
      lightboxIsOpen: true,
      lightboxIndex: index,
    })
  }
  closeLightBoxProject() {
    console.log('Close lightBox project')
    console.log(this.state)
    this.setState({
      lightboxIsOpen: false,
      lightboxIndex: 0,
    })
  }
  gotoPreviousLightBoxProject() {
    this.setState({
      lightboxIndex: (this.state.lightboxIndex + this.items.length - 1) % this.items.length,
    })
  }
  gotoNextLightBoxProject() {
    this.setState({
      lightboxIndex: (this.state.lightboxIndex + 1) % this.items.length,
    })
  }
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      speed: 500,
      slidesToShow: 3,
    }

    const slides = this.items.map((item, i) => {
      return (
        <div style={{ height: '50px' }} key={i}>
          <img
            onClick={() => this.handleOnclickImg(i)}
            style={{ cursor: 'pointer' }}
            src={item.src}
          />
        </div>
      )
    })
    {
    }
    return (
      <>
        <div className="mt-5">
          <div>
            <Slider {...settings}>{slides}</Slider>
          </div>
        </div>
        <LightboxProject
          onClose={this.closeLightBoxProject}
          lightboxIsOpen={this.state.lightboxIsOpen}
          currentImage={this.state.lightboxIndex}
          items={this.items}
          gotoPrevious={this.gotoPreviousLightBoxProject}
          gotoNext={this.gotoNextLightBoxProject}
        />
      </>
    )
  }
}

export default CarouselProject
