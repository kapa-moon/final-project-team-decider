import React from 'react';
import Button from './Button';

function Hangout()
{
    return(
        <div className = 'App flex-row' style = {{width: '50vw', height: '100vh'}}>
            <label className = {`base-input-class text-base text-primary`}>About the Hangout</label><br></br><br></br>
            <form>
                <Button str_array = {['From']} type = {1}></Button><br></br><br></br>
                <Button str_array = {['To']} type = {1}></Button><br></br><br></br>
                <Button str_array = {['Number of people']} type = {1}></Button>
            </form>
        </div>
    );
}

export default Hangout;