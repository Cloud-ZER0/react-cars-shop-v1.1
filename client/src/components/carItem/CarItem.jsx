import React from 'react'
import {useState} from 'react';
import cl from './CarItem.module.css';
import { Icons } from '../../Icons/Icons';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../store/FavoriteSlice';
import { routes } from '../routes/routes';



export default function CarItem({_id ,name, price, mileage, year, inFavorite, location, carImage}) {
    const img = carImage;

    const dispatch = useDispatch();
    const [inFavr, setInFavr] = useState(inFavorite);

    const toggleFavr = () => {
        if(!inFavr) {
            const newItem = {_id, name, price, mileage,year,inFavorite, location,carImage};
            dispatch(addToFavorite(newItem));
            setInFavr(!inFavr);
        } else {
            dispatch(removeFromFavorite(_id));
            setInFavr(!inFavr)
        }
    }


  return (
    <div className="card border-0">
        <Link style={{textDecoration: 'none'}} to={`${routes.carPage}/${_id}`}>
            <img src='https://content.homenetiol.com/698/2163991/640x480/f9f353f09f7946e38a2800df95ae5f0f.jpg' alt='not implimented yet' className="card-img"  />
        </Link>
        <div className="card-body">
            <div className="card-ttle">
                <span style={{fontSize: '14px', fontWeight: 'bold'}}>
                    {`${year} / ${mileage}K miles`}
                </span>
            </div>
            <div className="card-subtitle mt-2">
                <div className={cl._wrapper}>
                    <div className={cl.name_and_price}>
                        <span style={{fontSize: '18px', fontWeight: 'bold'}} cl={cl._naming}>{name}</span>
                        <strong style={{fontSize: '18px'}}>{'$'+price}</strong>
                    </div>
                    <span style={{fontSize: '12px'}} cl={cl._location}>{location}</span>
                </div>
            </div>
            <div className="card-text d-flex flex-row justify-content-between mt-3">
                <button className={cl._buyBtn}>Buy 100% online</button>
                <button onClick={toggleFavr}className={inFavr? cl._in_favr_btn : cl._add_to_favr_btn}>
                    <img style={{marginLeft: '1px', marginTop: '1px'}} height={'15px'} width={'15px'} src={inFavr? Icons.favrW : Icons.favr} alt="favorite"/>
                </button>
            </div>
        </div>
    </div>  
    )
}
