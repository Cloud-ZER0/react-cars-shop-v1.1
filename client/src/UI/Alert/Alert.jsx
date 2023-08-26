import React from 'react'
import cl from './Alert.module.css';

export default function Alert({active, setActive, content}) {

  if(!active) return null;

  return (
    <div className={cl._alert}>
        <h6 className={cl._warning}>Warning!</h6>
        <span style={{fontSize: '11px'}} >{content}</span>
        <button onClick={()=>{setActive(false)}} className={cl._round_btn}>X</button>
    </div>
  )
}
