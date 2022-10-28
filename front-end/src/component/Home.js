import React from 'react';
import './Home.css';
import Hangout from './Hangout';

function Home()
{
    return(
        <>
            <div className = 'home_body App flex-row'>
                <Hangout></Hangout>
            </div>
        </>
    );
}

export default Home;