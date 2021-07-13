import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from '../dropdown/Dropdown';
import logo from '../../assets/logo.png';

import './navbar.css'

export const Navbar = () => {

    const [ click, setClick ] = useState( false );
    const [ dropDown, setDropDown ] = useState( false );

    const handleMenuIcon = () => {
        setClick( !click );
        if ( window.innerWidth < 960 ) {
            setDropDown( true );
        } else {
            setDropDown( false );
        }
    }

    const handleCloseMobileMenu = () => {
        setClick( !click );
    }

    const handleOnMouseEnter = () => {
        if ( window.innerWidth > 960 ){
            setDropDown( true );
        }
    }
    const handleOnMouseLeave = () => {
        if ( window.innerWidth > 960 ) {
            setDropDown( false );
        }
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
                <li
                    className="navbar__nav-item withDrop"
                    onMouseEnter={ handleOnMouseEnter }
                    onMouseLeave={ handleOnMouseLeave }
                >
                    <Link
                        to="#"
                        className="navbar__nav-link"
                        onClick={ handleCloseMobileMenu }
                    >
                        ACERCA DE <i className="fas fa-caret-down" />
                    </Link>
                    { dropDown && <Dropdown/> }
                </li>
            </ul>
        </nav>
    )
}
