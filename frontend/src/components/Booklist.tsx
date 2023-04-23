import React, { useEffect, Suspense, useContext } from 'react';
import { BooksContext } from '../context/BooksContext';
import { AppService } from '../services/app.service';

const BookCard = React.lazy(() => import('./BookCard'));

const Booklist = () => {
    const booksContext = useContext(BooksContext);
    const getAllBooks = async () => {
        var service = new AppService();
        const bookslist = await service.getAllBooks();
        console.log("bookslist", bookslist);
        booksContext.setBooks(bookslist);
    }

    useEffect(() => {
        getAllBooks();
    }, []);
    return (
        <section className="book-list">
        <Suspense fallback={ <div>Loading...</div> }>
            { booksContext && booksContext.books && booksContext.books?.items.length > 0 && (
                booksContext.books.items.map(( item:any, index:number ) => {
                        return <BookCard key={ item.id }
                                    title={ item.volumeInfo?.title }
                                    imgSrc={ item.volumeInfo?.imageLinks?.thumbnail }
                                    authors={ item.volumeInfo?.authors }
                                    index={ index }/>
                    }
                )
            )}
        </Suspense>
    </section>
    )
}

export default Booklist;