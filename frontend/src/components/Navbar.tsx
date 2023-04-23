import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Search from './Search';
import { ReactComponent as Heart } from '../assets/heart.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo className='logo'/>
            <button className='wishlist-filter'>
                <Heart className='heart'/>
                <span className='wishlist-text'>My Wish List</span>
            </button>
            <Search />
        </div>
    )
}

export default Navbar;