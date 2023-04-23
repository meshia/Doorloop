import React, { useContext, useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import { BooksContext } from '../context/BooksContext';
import { ReactComponent as SearchIcon } from '../assets/search-filled.svg';
import axios from 'axios';

const Search = () => {
    const booksContext = useContext(BooksContext);
    const [query, setQuery] = useState<string | null>();
    const debouncedSearch = useDebounce(query, 500);

    useEffect(() => {
        booksContext.setWishlist(null);
        async function fetchData() {
            axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${ debouncedSearch }&maxResults=20`)
            .then(res => {
                booksContext.setBooks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        if(debouncedSearch) fetchData();
    },[debouncedSearch])

    return (
        <div className='search'>
            <input type='text'
                   placeholder='Looking for a book?'
                   onChange={(e) => setQuery(e.target.value)}
                   />
            <SearchIcon />
        </div>
    )
}

export default Search;