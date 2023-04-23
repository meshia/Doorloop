import React, { useState } from 'react';
import { ReactComponent as Heart } from '../assets/heart.svg';

interface BookProps {
    id: string
    title: string
    imgSrc: string
    authors: string
    index: number
}

const BookCard = (props:BookProps) => {
    const [inWishlist, setInWishlist] = useState(localStorage.getItem(props.id) ? true : false);
    const animationDelay = {
        animationDelay: `${ props.index * 2 }`
    }

    const addToWishlist = ( event:any ) => {
        if(localStorage.getItem(props.id)) {
            localStorage.removeItem(props.id)
            setInWishlist(false);
        } else {
            localStorage.setItem(props.id, JSON.stringify( props ))
            setInWishlist(true);
        }
    }

    return (
        <div className='book-card' style={ animationDelay }>
            <div className='book-top'>
                <img className='book-cover' alt={ props.title } src={ props.imgSrc } />
                <button className='wishlist-button' onClick={ addToWishlist }>
                     <Heart className={ `wishlist-icon ${ inWishlist ? 'pink' : ''}` }/>
                </button>
            </div>
            <span className='book-title'>{ props.title }</span>
            <span className='book-authors'>by { props.authors }</span>
        </div>
    )
}

export default BookCard;