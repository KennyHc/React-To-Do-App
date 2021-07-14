import React from 'react'

const Button = ({color, text, onClick}) => {
    
    return (<button onClick = {onClick} style = {{backgroundColor: color}}
     className = 'btn'> {text} </button>)
}

Button.defaultProps = {
    color: 'steelBlue',
    text: 'addText'
}

export default Button
