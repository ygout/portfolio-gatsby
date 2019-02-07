import React, { Component } from 'react'
import Lightbox from 'react-images'

class LightboxProject extends Component {
  constructor(props) {
    super(props)
    this.items = this.props.items
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      currentImage: nextProps.currentImage,
      lightboxIsOpen: nextProps.lightboxIsOpen,
    })
    console.log('Update receveied');
    console.log('state child', this.state);
  }

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.items}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.props.gotoPrevious}
        onClickNext={this.props.gotoNext}
        onClose={this.props.onClose}
      />
    )
  }
}

export default LightboxProject
