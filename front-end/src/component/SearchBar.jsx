import React from 'react';

function SearchBar()
{
    return(
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

export default SearchBar;