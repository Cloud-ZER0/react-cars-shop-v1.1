import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Icons } from '../../Icons/Icons';
import ImageButton from '../../UI/ImageBtn/ImageButton';
import {useSelector} from 'react-redux';
import cl from './Header.module.css';
import { routes } from '../routes/routes';

export default function Header() {


    const {length} = useSelector(state=>state.FavoriteSlice);

    const [displayInput, setDisplayInput] = useState(false);

   const toggleInput = () => {
        setDisplayInput(!displayInput);
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
            <Link className='navbar-brand nav-link' to={'/'}>
                Carshop.
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className='nav-link'>
                        <strong>SHOP</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>
                    <strong>TRADE/SELL</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>
                    <strong>WHY CARSHOP</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>
                    <strong>CAREERS</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>
                    <strong>SERVICE</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>
                    <strong>STORIES</strong>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>
                    <strong>BUY 100% ONLINE</strong>
                    </Link>
                </li>
            </ul>
            <div class="btn-group" role="group" aria-label="Basic example">
                <input type="text" placeholder='find' className={displayInput? cl._inpt_actv: cl._inpt} />
                <ImageButton onClick={toggleInput} source={Icons.search}/>
                <Link style={{textDecoration: 'none'}} className='d-flex flex-row jusitfy-content-center align-items-center me-3' to={routes.favorite}>
                    <div className='d-flex flex-row justify-content-center align-items-cetner'>
                        <img src={Icons.favr} height={'25px'} width={'25px'} alt="favorites" />
                        <span style={{position: 'relative', top: '7px'}}>{length}</span>
                    </div>
                </Link>
                <ImageButton source={Icons.phone}/>
            </div>
        </div>
    </nav>
  )
}
