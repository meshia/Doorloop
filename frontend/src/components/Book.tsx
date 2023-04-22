import React from 'react';
import { ReactComponent as Heart } from '../assets/heart.svg';

interface BookProps {
    title: string
    imgSrc: string
    authors: string
}

const Book = (props:BookProps) => {
    return (
        <div className='book'>
            <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${props.imgSrc})` }}></div>
                <div className='wishlist-button'>
                     <Heart className='wishlist-button'/>
                </div>
            </div>
            <div className='book-title'>{ props.title }</div>
            <div className='book-authors'>{ props.authors }</div>
        </div>
    )
}

export default Book