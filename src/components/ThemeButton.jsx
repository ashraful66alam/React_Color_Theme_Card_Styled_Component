import React from 'react'

function ThemeButton(props) {
  return (
    // <a href={props.link} target='_blank'>{props.text}</a>
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default ThemeButton