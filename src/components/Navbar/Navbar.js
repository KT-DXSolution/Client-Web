import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'store/modules/auth';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    const dispatch = useDispatch();

    const showButton = () => {
        if(window.innerWidth <= 800){
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    const logoutClick = () =>{
        dispatch(logout());
        window.location.href=process.env.PUBLIC_URL
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