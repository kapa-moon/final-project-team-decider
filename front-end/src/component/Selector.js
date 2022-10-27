import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import bowl from '../image/bowl.png';

function Selector() {
    return (
        <div>
            <Link to='/'>
                <div className='w-14'>
                    <img src={bowl} alt='logo' className='logo object-fill'></img>
                </div>

            </Link>
            <SearchBar></SearchBar>
            <div className='selectors flex justify-between h-20'>
                <Link to='/group' className='text-xl '>Recommend</Link>
                <Link to='/group' className='text-xl '>Group List</Link>
                <Link to='/go' className='text-xl '>Go!</Link>
            </div>
        </div>
    );
}

export default Selector;