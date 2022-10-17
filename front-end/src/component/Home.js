import React from 'react';
import Hangout from './Hangout';

function Home()
{
    return(
        <>
            <div className = 'App flex-row' style = {{width: '50vw', height: '100vh'}}>
                <Hangout/>
            </div>
        </>
    );
}

export default Home;