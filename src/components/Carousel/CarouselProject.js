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
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }

    const slides = this.items.map((item, i) => {
      return (
        <div>
          <a
            href={item.src}
            key={i}
            // onClick={e => this.openLightbox(i, e)}
          >
            <img src={item.src}/>
          </a>
        </div>
      )
    })

    return (
      <>
        <div>
          <Slider {...settings}>{slides}</Slider>
        </div>
        <LightboxProject items={this.items} />
      </>
    )
  }
}

export default CarouselProject
