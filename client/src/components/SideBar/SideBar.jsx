import React, { useState } from 'react'
import cl from './SideBar.module.css'
import PriceSlider from '../../UI/PriceSlider/PriceSlider'
import Selector from '../../UI/Selector/Selector'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMilesFilter, toggleModelFilter, toggleYearFilter } from '../../store/FilterSlice'
import {useFiltersState} from '../../hooks/useFiltersState'


export default function SideBar() {

  const {modelFilterState, mileslFilterState, yaerFilterState} = useFiltersState();
  

  const dispatch = useDispatch();

  const modelHandler = (data) => {
      dispatch(toggleModelFilter(data));
  };

  const milesHandler = (data) => {
      dispatch(toggleMilesFilter(data));
  };

  const yearHandler = (data) => {
      dispatch(toggleYearFilter(data))
  };

  const [selectors, setSelectors] = useState([
    {conditions: modelFilterState, title: 'Make & model', handler: modelHandler},
    {conditions: mileslFilterState, title: 'Miles', handler: milesHandler},
    {conditions: yaerFilterState, title: 'Years', handler: yearHandler},
  ])

  return (
    <div className={cl._main_wrapper}>
        <PriceSlider/>
        {selectors && selectors.map(el=>{
          return <Selector {...el}/>
        })}
    </div>
  )
}


