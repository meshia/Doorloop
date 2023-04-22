import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={ <div>Loading...</div> }>
        <Booklist /> 
      </Suspense>
    </div>
  );
}

export default App;
