import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Search from './Search';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <Search />
        </div>
    )
}

export default Navbar;