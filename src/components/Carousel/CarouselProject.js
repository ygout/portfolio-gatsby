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
      lightboxIndex: 0
    }
  }
  handleOnclickImg(index){
    console.log('index',index)
    this.setState({
      lightboxIsOpen: true,
      lightboxIndex: index
    });
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
            <img onClick= {() => this.handleOnclickImg(i)} style= {{cursor: 'pointer'}} src={item.src} />
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
        <LightboxProject lightboxIsOpen={this.state.lightboxIsOpen} currentImage={this.state.lightboxIndex} items={this.items} />
      </>
    )
  }
}

export default CarouselProject
