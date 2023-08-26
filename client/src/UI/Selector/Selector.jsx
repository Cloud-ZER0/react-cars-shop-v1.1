import React, { useState } from 'react'
import cl from './Selector.module.css'
import { useSelector } from 'react-redux';
import PlusSVG from '../../components/Svgs/PlusSVG';
import MinusSVG from '../../components/Svgs/MinusSVG';

export default function Selector({conditions = [], title = '', handler = (val) => {}}) {

  const[visible, setVisible] = useState(false);

  return (
    <div className={cl._selector_wrapper}>
        <div  onClick={()=>setVisible(!visible)} className={cl._helper}>
          <h5>{title}</h5>
          {visible? <MinusSVG height={'15px'} width={'15px'} /> : <PlusSVG height={'15px'} width={'15px'}/> }
        </div>
        <div className={visible? cl._options: cl._option_inv}>
            <ul className='p-0 ps-4'>
              {conditions && conditions.map(cond => {
                 return <li key={cond.title} className='d-flex justify-content-start aling-items-center'>
                    <input  className='me-2' type='checkbox' value={cond.title} onChange={event => handler(event.target.value)} />
                    <span>{cond.title}</span>
                  </li>
              })}
            </ul>
        </div>
    </div>
  )
}
