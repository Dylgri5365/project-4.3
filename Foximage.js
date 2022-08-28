import React from 'react';
import './Foximage.css';
import image from './image.webp'

export default function Foximage() {

 
    return(
      <div className="Foximage">
        <img alt="Foxy" src={image} />
        <p></p>
      </div>
    )
  }