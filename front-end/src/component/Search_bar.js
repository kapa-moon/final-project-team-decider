import React, { useState, useRef } from 'react';
import './Search_bar.css';

function Search_bar()
{
    let input_ref = useRef(null);

    function handle_click()
    {/* console.log(JSON.stringify(input_ref.current.value)); */
        fetch('http://localhost:4000/search',
        {
            method: 'post',
            headers: 
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([input_ref.current.value])
        })
        .then((res) =>
        {
            return res.json();
        })
        .catch((e) =>
        {
            console.log(e);
        });
        window.location.reload(false);
    }

    return(
      <div className='flex justify-center pt-5 pb-4'>
        <div className='flex justify-center items-center w-full h-12 bg-white rounded-xl ring-2 ring-primary'>
          <input className='w-4/5 h-10 bg-white rounded-xl border-primary text-md focus:outline-none'
          type='search' placeholder='I have a place in mind' ref = {input_ref}/>
          <div className='p-2'>
            <button className = 'search_bar0' onClick = {handle_click}><svg className='w-6 h-6 text-gray-500 text-primary' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg></button>
          </div>
        </div>
      </div>
    );
}

export default Search_bar;