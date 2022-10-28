import React from 'react';
import './Hangout.css';
import Button from './Button';
import BackEnter from './BackEnter';

function Hangout()
{
    return(
        <div className = 'App_body'>
            <form>
                <Button str_array = {[{str: 'Your Group Code', placeholder: 'externcharenviron'}]} type = {10}></Button>
                <BackEnter></BackEnter>
            </form>
        </div>
    );
}

export default Hangout;