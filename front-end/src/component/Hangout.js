import React from 'react';
import '../App.css'
import './Hangout.css';
import Button from './Button';
import Back_enter from './Back_enter';

function Hangout() {
    let cur_id = Math.random().toString().slice(2);
    function fetchUser() {
        fetch('/user/' + cur_id)
            .then(res => res.json())
            .then(user => console.log
                (
                    user
                ));
        console.log(cur_id);
        console.log('fetching user');
    }

    return (
        <div className='body'>
            <form>
                <Button str_array={[{ str: 'New Group Code', placeholder: cur_id }]} type={10}></Button>
                <Back_enter cur_id={cur_id}></Back_enter>
            </form>
        </div>
    );
}

export default Hangout;