import React, { createContext, useState  } from 'react';
import { BooksList } from './books';

type BooksContextType = {
    books: BooksList | null
    setBooks: React.Dispatch<React.SetStateAction<BooksList | null>>
}

type BooksContextProviderProps = {
    children: React.ReactNode
}

export const BooksContext = createContext({} as BooksContextType);

export const BooksContextProvider = ({ children }: BooksContextProviderProps) => {
    const [books, setBooks] = useState<BooksList | null>(null);
    return (
        <BooksContext.Provider value={{ books,setBooks }}>
            { children }
        </BooksContext.Provider>
    );
}