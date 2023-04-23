import React from 'react';
import { ReactComponent as Heart } from '../assets/heart.svg';

interface BookProps {
    title: string
    imgSrc: string
    authors: string
    index: number
}

const BookCard = (props:BookProps) => {
    const animationDelay = {
        animationDelay: `${ props.index * 2 }`
    }

    const addToWishlist = ( event:any ) => {
        console.log(event)
    }

    return (
        <div className='book-card' style={ animationDelay }>
            <div className='book-top'>
                <img className='book-cover' alt={ props.title } src={ props.imgSrc } />
                <button className='wishlist-button' onClick={ addToWishlist }>
                     <Heart className='wishlist-icon'/>
                </button>
            </div>
            <span className='book-title'>{ props.title }</span>
            <span className='book-authors'>by { props.authors }</span>
        </div>
    )
}

export default BookCard;