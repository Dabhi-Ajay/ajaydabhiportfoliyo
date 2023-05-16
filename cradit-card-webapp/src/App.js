import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className='main min-h-screen w-full'>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
