import React from 'react';
import Header from './Header';
import Hangout from './Hangout';

function Home()
{
    return(
        <>
            <Header></Header>
            <div className = 'App_body'>
                <Hangout></Hangout>
            </div>
        </>
    );
}

export default Home;