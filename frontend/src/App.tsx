import React, { Suspense, useState, useEffect, useContext } from 'react';
import { BooksContextProvider } from './context/BooksContext';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';

function App() {
    
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <Suspense fallback={ <div>Loading...</div> }>
          <Booklist /> 
        </Suspense>
      </BooksContextProvider>
    </div>
  );
}

export default App;
