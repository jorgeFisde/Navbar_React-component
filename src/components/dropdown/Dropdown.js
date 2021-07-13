import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './dropDataFixed';

import './dropdown.css';

export const Dropdown = () => {

    const [click, setclick] = useState( false );

    const handleDropdownClick = () => {
        setclick( !click );
    }

    return (
        <>
            <ul
                className={ click ? 'dropdown__drop-menu clicked' : 'dropdown__drop-menu' }
                onClick={ handleDropdownClick }
            >
                {
                    menuItems.map( ({ title, cName,path }, index) => (
                        <li
                            key={ index }
                            >
                            <Link
                                className={ cName } 
                                to={ path }
                                onClick={ handleDropdownClick }
                            >
                                { title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
