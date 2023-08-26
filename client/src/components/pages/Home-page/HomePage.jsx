import React from 'react'
import CarList from '../../CarList/CarList'
import cl from './HomePage.module.css';
import SideBar from '../../SideBar/SideBar';

export default function HomePage() {
  return (
    <div className={cl._main_content_wrapper}>
        <SideBar/>
        <div className={cl._cars_list_wrapper}>
          <CarList/>
        </div>
    </div>
  )
}
