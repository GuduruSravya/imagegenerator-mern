import React from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import {Home,Create} from './pages';

import {ai} from './assets/index';

const App = () => {
  return (
    <Router>
      <header className="w-full flex
      justify-between items-center bg-white
      sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]
      ">
        <Link to='/'>
          <img src={ai} className='w-16 object-contain' />
          <h2 className='font-bold'>Mind <span className="font-extrabold text-[#38b6ff]">Canvas</span></h2>
        </Link>
        <Link to='/create' className='font-inter font-medium bg-[#38b6ff] text-white
        px-4 py-2 rounded-md'>
        Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App