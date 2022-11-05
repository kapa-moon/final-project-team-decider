import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import Search_bar from './Search_bar';
import bowl from '../image/bowl.png';

function Select()
{
    return (
        <div>
            <Link to='/'>
                <div className='w-14'>
                    <img src={bowl} alt='logo' className='logo object-fill'></img>
                </div>
            </Link>
            <Search_bar></Search_bar>
            <div className='selectors flex justify-between h-20'>
                <Link to='/search' className='text-xl'>Search</Link>
                <Link to='/recommend' className='text-xl '>Recommend</Link>
                <Link to='/group' className='text-xl '>Group List</Link>
                <Link to='/go' className='text-xl '>Go!</Link>
            </div>
        </div>
    );
}

export default Select;