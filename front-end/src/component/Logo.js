import React from 'react';
import {Link} from 'react-router-dom';
import bowl from '../image/bowl.png';

function Logo()
{
  return (
    <>
        <Link to='/'>
                <div className='w-14'>
                    <img src={bowl} alt='logo' className='logo object-fill'></img>
                </div>
        </Link>
    </>
  );
}

export default Logo;