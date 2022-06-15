import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 800){
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    const logoutClick = () =>{
        window.localStorage.removeItem('ceoSeq');
        window.localStorage.removeItem('apiToken');
        window.location.reload();
    }

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    사장님포탈 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/orders' className='nav-links' onClick = {closeMobileMenu}>
                            Orders
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/registerItem' className='nav-links' onClick = {closeMobileMenu}>
                            Register
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick = {logoutClick}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar