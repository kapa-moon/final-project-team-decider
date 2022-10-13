import React from 'react';
import Space from './Space';

function Hangout()
{
    return(
        <>
            <label className = {`base-input-class font left_top`}>About the Hangout</label>
            <form>
                From <Space n = {3}/><input type = 'text'></input>
                <Space n = {3}/> To <Space n = {3}/><input type = 'text'></input><br/><br/>
                Number of people <input type = 'text'></input>
            </form>
        </>
    );
}

export default Hangout;