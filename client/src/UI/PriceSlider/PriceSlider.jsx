import React, { useState } from 'react'
import cl from './PriceSlider.module.css'
import { removePriceFilter, togglePriceFilter } from '../../store/FilterSlice';
import { useDispatch } from 'react-redux';
import Alert from '../Alert/Alert';

export default function PriceSlider({maximum = ''}) {

    const [min, setMin] = useState('0');
    const [max, setMax] = useState('65000');
    const [alert, setAlert] = useState(false);

    const dispatch = useDispatch();

    const changeMax = (event) => {
        setMax(event.target.value);
    }

    const changeMin = (event) => {
      setMin(event.target.value);
  }

  const Filter = () => {
    if(Number(min) > Number(max)) {
        setAlert(true);
        setMin('0');
        return;
    } else {
      dispatch(togglePriceFilter({min, max}))
    }
  }

  function reset() {
    setMin('0');
    setMax('1');
    dispatch(removePriceFilter());
  }

  return (
    <div className={alert? cl._slider_wrapper_w_alert : cl._slider_wrapper}>
        <strong className='display-6 mb-3'>Settings</strong>
        <div className={cl._min}>
            <span className='ms-3'>Min</span>
            <div className='d-flex flex-row justify-content-between'>
              <input className={cl._inpt} type="range" min={'0'} max={'64999'} value={min} step={'1000'} onChange={changeMin} />
              <span className='me-3 ms-4'>{`$ ${min === '0'? '0,0000': min}`}</span>
            </div>
        </div>
        <div className={cl._max}>
            <span className='ms-3'>Max</span>
            <div className='d-flex flex-row justify-content-between'>
              <input className={cl._inpt} type="range" min={'1'} max={'65000'} value={max} step={'1000'} onChange={changeMax} />
              <span className='me-3 ms-4'>{`$ ${max === '1'? '0,0001': max}`}</span>
            </div>
        </div>
        <div className={cl._btn_group}>
            <button onClick={Filter} className={cl._apply_btn}>Apply</button>
            <button onClick={reset} className={cl._reset_btn}>Reset</button>
        </div>
        <Alert active={alert} setActive={setAlert} content={'Min price cant be more then a max'}/>
    </div>
  )
}
