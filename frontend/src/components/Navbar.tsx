import React, { useContext, useState } from 'react';
import { BooksContext } from '../context/BooksContext';
import Search from './Search';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';

const Navbar = () => {
    const booksContext = useContext(BooksContext);
    const displayWishlist = ( event:any ) => {
        const parsedLocalStorage = Object.values(localStorage).map(item => JSON.parse(item));
        booksContext.setBooks(null);
        booksContext.setWishlist(parsedLocalStorage);
    }

    return (
        <div className='navbar'>
            <Logo className='logo'/>
            <button className='wishlist-filter' onClick={ displayWishlist }>
                <Heart className='heart'/>
                <span className='wishlist-text'>My Wish List</span>
            </button>
            <Search />
        </div>
    )
}

export default Navbar;