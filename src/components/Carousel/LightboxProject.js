import React, { Component } from 'react'
import Lightbox from 'react-images'
// import PropTypes from 'prop-types'

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
// LightboxProject.PropTypes = {
//   items: PropTypes.array,
//   lightboxIsOpen: PropTypes.bool,
//   currentImage: PropTypes.number,
//   gotoPrevious: PropTypes.func,
//   gotoNext: PropTypes.func,
//   onClose: PropTypes.func,
// }
export default LightboxProject
