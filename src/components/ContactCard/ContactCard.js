import React from 'react'
import './ContactCard.css'
import avatar from '../../images/avatar.png' // Tell Webpack this JS file uses this image

export default function ContactCard() {
  return (
    <div className="flip-card mt-5" >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img alt="Avatar" src={avatar} />
          <h1>Yohann Goutaret</h1>
          <p>Développeur FullStack</p>
        </div>
        <div className="flip-card-back">
          <h3>Yohann Goutaret</h3>
          <p>Valence / Grenoble</p>
          <p>Développeur Full Stack</p>
          <p>06 30 19 22 56</p>
          <p>yohann.goutaret@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
