import React, { Component } from 'react'
import Lightbox from 'react-images'

class LightboxProject extends Component {
  constructor(props) {
    super(props)
    this.items = this.props.items;
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index, event) {
    event.preventDefault()
    this.props.lightboxIsOpen = true;
    this.props.currentImage = index;

    // this.setState({
    //   currentImage: index,
    //   lightboxIsOpen: true,
    // })
  }
  closeLightbox() {
    this.props.lightboxIsOpen = false;
    this.props.currentImage = 0;
    // this.setState({
    //   currentImage: 0,
    //   lightboxIsOpen: false,
    // })
  }
  gotoPrevious() {
    this.props.currentImage = this.props.currentImage - 1;
    // this.setState({
    //   currentImage: this.state.currentImage - 1,
    // })
  }
  gotoNext() {
    this.props.currentImage = this.props.currentImage + 1;
    // this.setState({
    //   currentImage: this.state.currentImage + 1,
    // })
  }
  gotoImage(index) {
    this.props.currentImage = index;
    // this.setState({
    //   currentImage: index,
    // })
  }
  handleClickImage() {
    if (this.props.currentImage === this.items.length - 1) return

    this.gotoNext()
  }
  render() {
    return (
      <Lightbox
        images={this.items}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    )
  }
}

export default LightboxProject
