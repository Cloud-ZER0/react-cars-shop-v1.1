import React from 'react'
import cl from './ImageButton.module.css'

export default function ImageButton({source, onClick}) {
  return (
    <button onClick={onClick} className={cl._btn}>
        <img height={'25px'} width={'25px'} src={source} alt="someImage" />
    </button>
  )
}
