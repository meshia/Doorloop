import React, { useState, useEffect, Suspense } from 'react';
import { AppService } from '../services/app.service';

const Book = React.lazy(() => import('./Book'));

const Booklist = () => {
    const [ books, setBooks ] = useState<any>();

    const getAllBooks = async () => {
        var service = new AppService();
        const books = await service.getAllBooks();
        setBooks(books);
        console.log("AppService", books);
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    return (
        <section className="booklist">
        <Suspense fallback={ <div>Loading...</div> }>
        { books && books.items.length > 0 ? (
            <div className='books'>
                { books.items.map(( item:any ) => {
                    console.log("item", item);
                        return <Book key={ item?.id }
                                     title={ item?.volumeInfo?.title }
                                     imgSrc={ item?.volumeInfo?.imageLinks?.thumbnail }
                                     authors={ item?.volumeInfo?.authors } />
                    }
                )}
            </div>
        ) : (
            <span>No books found</span>
        )}
        </Suspense>
    </section>
    )
}

export default Booklist;