import React, { createContext, useState  } from 'react';
import { BooksList, Wishlist } from './books';

type BooksContextType = {
    books: BooksList | null
    setBooks: React.Dispatch<React.SetStateAction<BooksList | null>>
    wishlist: Wishlist | null
    setWishlist: React.Dispatch<React.SetStateAction<Wishlist | null>>
}

type BooksContextProviderProps = {
    children: React.ReactNode
}

export const BooksContext = createContext({} as BooksContextType);

export const BooksContextProvider = ({ children }: BooksContextProviderProps) => {
    const [books, setBooks] = useState<BooksList | null>(null);
    const [wishlist, setWishlist] = useState<Wishlist | null>(null);
    return (
        <BooksContext.Provider value={{ books,setBooks, wishlist, setWishlist }}>
            { children }
        </BooksContext.Provider>
    );
}