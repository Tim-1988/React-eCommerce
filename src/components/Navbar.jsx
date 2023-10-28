import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    STORE
                </Link>

                <div className='menu-burger' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                            Products <i className='fas fa-caret-down' />
                            {dropdown && <Dropdown />}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Cart' className='nav-links' onClick={closeMobileMenu}>
                        <i class="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;