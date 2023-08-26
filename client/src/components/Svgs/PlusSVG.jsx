import React from 'react'

export default function PlusSVG({...props}) {
  return (
    <svg {...props} class="plus_svg__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.1">
      <path class="plus_svg__vertical" d="M7.5 0a1.11 1.11 0 011.1 1.1V14a1.11 1.11 0 01-1.1 1.1A1.11 1.11 0 016.4 14V1.1A1.11 1.11 0 017.5 0z"></path>
      <path class="plus_svg__horizontal" d="M15 7.5a1.11 1.11 0 01-1.1 1.1H1.1A1.11 1.11 0 010 7.5a1.11 1.11 0 011.1-1.1H14a1.1 1.1 0 011 1.1z"></path>
  </svg>
  )
}