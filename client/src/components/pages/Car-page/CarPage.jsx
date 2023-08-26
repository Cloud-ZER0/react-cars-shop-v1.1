import React, { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useCar } from '../../../hooks/useCar';
import { getCar } from '../../../store/CarSlice';
import cl from './Styles.module.css';

export default function CarPage() {

  const navigation = useNavigate();
  const { id } = useParams();
  const {data, isLoading} = useSelector(state => state.carSlice);

  console.log(data);

  useCar(id);

  return (
    <div className={cl._background}>
      <div className='container-lg'> 
          <div className="row gx-0">
            <div className="col bg-danger p-0">
              <img src="https://content.homenetiol.com/941x706/71df10d3c2f042679e9056056fc9dbe5.jpg" alt="" />
            </div>
            <div className='col d-flex flex-column'>
                <div className='d-flex flex-column bg-white'>
                  <div className='display-6 d-flex justify-content-center'>About Car</div>
                  <hr/>
                  <ul>
                    <li className='mb-3'>
                      <h5>
                        {data.name}
                      </h5>
                    </li>
                    <li className='mb-3'>
                      <h5>
                        {`${data.mileage}K miles`}
                      </h5>
                    </li>
                    <li className='mb-3'>
                      <h5>
                        {data.year}
                      </h5>
                    </li>
                    <li className='mb-3'>
                      <h5>
                        {data.location}
                      </h5>
                    </li>
                    <li className='mb-3'>
                      <h5>
                        {`Price: ${data.price}$ `}
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className='h-100 bg-white d-flex flex-column justify-content-center align-items-center'>
                    <button style={{width: "300px" }} className='btn btn-small rounded btn-success mb-3'>Buy</button>
                    <button style={{width: "300px" }} className='btn btn-small rounded btn-danger'>In favorite</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
