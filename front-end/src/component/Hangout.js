import React, {useState, useEffect} from 'react';
import '../App.css'
import './Hangout.css';
import Button from './Button';
import Back_enter from './Back_enter';

function Hangout()
{
    let cur_id = Math.random().toString().slice(2);

    return (
        <div className='body'>
            <form>
                <Button str_array={[{ str: 'Your Group Code', placeholder: cur_id }]} type={10}></Button>
                <Back_enter cur_id = {cur_id}></Back_enter>
            </form>
        </div>
    );
}

export default Hangout;