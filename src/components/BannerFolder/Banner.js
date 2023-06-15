import React from 'react'
import bannerImage from "../../assets/banner/first-final.jpg"
import classes from "./Banner.module.css"

function Banner() {
  return (
    <div>
        <img className={classes.imageBanner} src={bannerImage} alt='vollmerImage'/>
    </div>
  )
}

export default Banner