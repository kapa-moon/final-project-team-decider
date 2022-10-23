import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

function Selector()
{
    return(
        <>
        <Link to='/'>
            <div className='placeholder h-12 w-12 rounded-md bg-border-green'></div>
        </Link>
        <SearchBar></SearchBar>
        <div className='selectors flex justify-between h-20'>
          <Link to='/group' className='text-xl '>Recommend</Link>
          <Link to='/group' className='text-xl '>Group List</Link>
          <Link to='/group' className='text-xl '>Go!</Link>
        </div>
        </>
    );
}

export default Selector;