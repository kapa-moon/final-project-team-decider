import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateNewTeam from './component/CreateNewTeam';
import Home from './component/Home';
import Group from './component/Group';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App max-h-screen flex justify-center min-w-screen md: max-w-800'>
      <div style = {{margin: '7vw'}}>

        <Link to='/'>
          <div className='placeholder rounded-md bg-border-green' style = {{width: '7vw', height: '7vw'}}></div> 
        </Link>

        <SearchBar></SearchBar>
        <div className='selectors flex justify-between' style = {{height: '11vh'}}>
          <Link to='/group' style = {{fontSize: '3vh'}}>Recommend</Link>
          <Link to='/group' style = {{fontSize: '3vh'}}>Group List</Link>
          <Link to='/group' style = {{fontSize: '3vh'}}>Go!</Link>
        </div>

        <div className='routes h-2/3'>
          <Routes>
            <Route path='/' element={<CreateNewTeam />} />
            <Route path='/home' element={<Home />} />
            <Route path='/group' element={<Group />} />
          </Routes>
        </div>

      </div>
    </div>

  );
}


// DETACH SEARCH BAR FROM APP.JS
const SearchBar = () => {
  return (
    <div className='flex justify-center pt-5 pb-4'>
      <div className='flex justify-center items-center w-full h-12 bg-white rounded-xl ring-2 ring-primary'>
        <input className='w-4/5 h-10 bg-white rounded-xl border-primary text-md focus:outline-none' type='search' placeholder='I have a place in mind' />
        <div className='p-2'>
          <svg className='w-6 h-6 text-gray-500 text-primary' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </div>
      </div>

    </div>
  );
}

export default App;
