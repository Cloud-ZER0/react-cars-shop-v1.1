import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarItem from '../carItem/CarItem';
import { getCars } from '../../store/CarsSlice';
import { useMilesFilter, useModelFilter, usePriceFilter, useYearFilter } from '../../hooks/useFilter';

export default function CarList() {

  const dispatch = useDispatch();
  const {carsList, isLoading} = useSelector(state => state.carsSlice);


  useEffect(()=>{
    dispatch(getCars());
  },[dispatch])

  const filtredCarsList = usePriceFilter(carsList);
  const filtredModelCarsList = useModelFilter(filtredCarsList);
  const miles = useMilesFilter(filtredModelCarsList);
  const yeras = useYearFilter(miles);


  return (
    <div className="container-fluid p-0">
        {isLoading && <strong className='text-dark display-1 text-center'>Loading...</strong>}
        <div className="row p-0 m-0 justify-content-center gx-4 gy-4">
            {yeras && yeras.map(car => {
                return (
                    <div className="col-4">
                        <CarItem key={car._id} {...car}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
