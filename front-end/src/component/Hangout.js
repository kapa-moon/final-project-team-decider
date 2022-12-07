import React, { useRef } from 'react';
import '../App.css'
import './Hangout.css';
import Button from './Button';
import Back_enter from './Back_enter';
import { Link, useNavigate } from "react-router-dom";

function Hangout() {
    let cur_id = Math.random().toString().slice(11);
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

    let navigate = useNavigate(),
    input_ref = useRef(null);

    function handle_click() {
        alert(`Group ${input_ref.current.value} removed.`);
        fetch(`${process.env.REACT_APP_BACK_END_URL}/groups/idx/${input_ref.current.value}`,
        {
            method: 'delete',
            headers:
            {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .catch(function (error){ console.log(error); });
        window.location.reload(true);
    }

    return (
        <div className='body'>
            <form>
                <Button str_array={[{ str: 'New Group Code', placeholder: cur_id }]} type={10}></Button>
                <Back_enter cur_id={cur_id}></Back_enter>
                <div>
                    <label className='b1 block mb-2'>Remove a group from database</label>
                    <input className='b1' type='text' placeholder='Group Number' ref={input_ref}></input>
                </div>
                <br></br>
                <div>
                    <button className='b4_2' onClick={() => handle_click()} style={{ left: '0px', top: '-26px' }}>Remove</button>
                </div>
                <Link to = '/view' style = {{textDecoration: 'underline', color: '#723d46', fontSize: '25px'}}>View</Link>
            </form>
        </div>
    );
}

export default Hangout;