import React from 'react'

interface Props{
    title:string
}

function Button({title}:Props) {
  return (
    <button>Button</button>
  )
}

export default Button