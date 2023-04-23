import React, { useContext, useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import { BooksContext } from '../context/BooksContext';
import { ReactComponent as SearchIcon } from '../assets/search-filled.svg';
import axios from 'axios';

const Search = () => {
    const booksContext = useContext(BooksContext);
    const [query, setQuery] = useState<string | null>();
    const [loading, setLoading] = useState(false);
    const debouncedSearch = useDebounce(query, 300);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${ debouncedSearch }&maxResults=20`)
            .then(res => {
                    booksContext.setBooks(res.data);
                    setLoading(false);
                })
            .catch(err => {
                    console.log(err);
                })
        }
        if(debouncedSearch) fetchData();
    },[booksContext, debouncedSearch])

    return (
        <div className='search'>
            <input type='text'
                   placeholder='Search'
                   onChange={(e) => setQuery(e.target.value)}
                   />
            <SearchIcon />    
        </div>
    )
}

export default Search;