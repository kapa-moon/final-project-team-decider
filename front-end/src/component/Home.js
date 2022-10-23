import React from 'react';
import Hangout from './Hangout';
import './Home.css';

function Home()
{
    return(
        <>
            <div className = 'home App flex-row'>
                <Hangout></Hangout>
            </div>
        </>
    );
}

export default Home;