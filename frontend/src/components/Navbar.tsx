import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Search from './Search';
import { ReactComponent as Heart } from '../assets/heart.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <button className='wishlist-filter'>
                <Heart />
                <span>Wishlist</span>
            </button>
            <Search />
        </div>
    )
}

export default Navbar;