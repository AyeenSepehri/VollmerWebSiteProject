import React from 'react'
import classes from "./TextBox.module.css"
import BasicButtons from '../../layout/Button/Button'

function TextBox() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>helllllo world</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <BasicButtons/>
      </div>
    </div>
  )
}

export default TextBox