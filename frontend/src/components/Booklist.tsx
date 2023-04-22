import React, { useState, useEffect, Suspense } from 'react';
import { AppService } from '../services/app.service';

const BookCard = React.lazy(() => import('./BookCard'));

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
        <section className="book-list">
        <Suspense fallback={ <div>Loading...</div> }>
            { books && books.items.length > 0 && (
                books.items.map(( item:any, index:number ) => {
                        return <BookCard key={ item?.id }
                                    title={ item?.volumeInfo?.title }
                                    imgSrc={ item?.volumeInfo?.imageLinks?.thumbnail }
                                    authors={ item?.volumeInfo?.authors }
                                    index={ index }/>
                    }
                )
            )}
        </Suspense>
    </section>
    )
}

export default Booklist;