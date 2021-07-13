import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './dropDataFixed';

import './dropdown.css';

export const MyDropdown = ({ closeMenu }) => {

    const [ dropShow, setDropShow ] = useState( false );

    const handleDropdownClick = () => {
        setDropShow( !dropShow );
    }

    const handleDropDownLink = () => {
        setDropShow( !dropShow );
        if ( window.innerWidth < 960 ) {
            closeMenu();
        }
    }

    return (
        <li
            className="navbar__nav-item withDrop"
        >
            <p
                className="navbar__nav-link about"
                onClick={ handleDropdownClick }
            >
                ACERCA DE <i className="fas fa-caret-down"></i>
            </p>
            <ul
                className={ dropShow ? 'dropdown__drop-menu' : 'dropdown__drop-menu hidden' }
            >
                {
                    menuItems.map( ({ title, cName,path }, index) => (
                        <li
                            key={ index }
                            >
                            <Link
                                className={ cName } 
                                to={ path }
                                onClick={ handleDropDownLink }
                            >
                                { title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}
