import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { MyDropdown } from '../dropdown/MyDropdown';

import './navbar.css'

export const MyNavbar = () => {

    const [ click, setClick ] = useState( false );

    const handleMenuIcon = () => {
        setClick( !click );
    }

    const handleCloseMobileMenu = () => {
        setClick( !click );
    }

    return (
        <nav className="navbar__navbar-container">
            <Link
                to="#"
                className="navbar__nav-logo"
            >
                <img 
                    src={ logo }
                    alt="logoImg"
                />
            </Link>
            <div 
                className="navbar__menu-icon"
                onClick={ handleMenuIcon }
            >
                <i className={ click ? `fas fa-times` : `fas fa-bars`}/>
            </div>
            <ul  
                className={ click ? `navbar__nav-menu active` : `navbar__nav-menu` }
            >
                <li
                    className="navbar__nav-item"
                >
                    <Link
                        to="#"
                        className="navbar__nav-link"
                        onClick={ handleCloseMobileMenu }
                    >
                        SERVICIOS
                    </Link>
                </li>
                <li
                    className="navbar__nav-item"
                >
                    <Link
                        to="#"
                        className="navbar__nav-link"
                        onClick={ handleCloseMobileMenu }
                    >
                        ABOGADOS
                    </Link>
                </li>
                <li
                    className="navbar__nav-item"
                >
                    <Link
                        to="#"
                        className="navbar__nav-link"
                        onClick={ handleCloseMobileMenu }
                    >
                        PROBONO
                    </Link>
                </li>
                <li
                    className="navbar__nav-item"
                >
                    <Link
                        to="#"
                        className="navbar__nav-link"
                        onClick={ handleCloseMobileMenu }
                    >
                        BLOG
                    </Link>
                </li>
                <MyDropdown 
                    closeMenu={ handleCloseMobileMenu }
                />
            </ul>
        </nav>
    )
}
