import React from 'react';
import './Hangout.css';
import Button from './Button';
import BackEnter from './BackEnter';

function Hangout()
{
    return(
        <div className = 'App_body'>
            <form>
                <Button str_array = {['Invite Friends']} type = {1}></Button>
                <div className = 'div0'><Button str_array = {[{str: '', placeholder: 'Copy Link'}]} type = {3}></Button></div>
                <BackEnter></BackEnter>
                <br></br><br></br>
                <Button str_array = {['Enter Group Code:']} type = {1}></Button>
                <BackEnter></BackEnter>
            </form>
        </div>
    );
}

export default Hangout;