import React, {useRef} from 'react';
import '../App.css';
import Button from './Button';
import {useNavigate} from "react-router-dom";
import sha256 from 'crypto-js/sha256';

function Signup()
{
    let input_ref = useRef(null),
    input_ref2 = useRef(null), 
    input_ref3 = useRef(null),
    navigate = useNavigate();

    function click_signup()
    {
        fetch(`${process.env.REACT_APP_BACK_END_URL}/user/add`,
        {
            method: 'post',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body:
            JSON.stringify
            ({
                user_id: Math.random().toString().slice(2),
                username: input_ref.current.value,
                email: input_ref2.current.value,
                hash: sha256(input_ref3.current.value).toString()
            })
        })
        .then((res) =>
        {
            if(!res.ok)
                alert('Username is already taken.');
            else
            {
                alert('New account created.');
                navigate('/');
            }
            return res.blob();
        })
        .catch(function (error){ console.log(error); });
    }

    return(
        <>
            <div className='d0'>
                <div className='App_body'>
                    <Button str_array={[{ str: 'Sign Up' }]} type={8}></Button>
                    <Button str_array={[{ str: 'Username', text_align: 'left', ref: input_ref }]} type={13}></Button>
                    <Button str_array={[{ str: 'Email', text_align: 'left', ref: input_ref2 }]} type={13}></Button>
                    <div>
                        <label className='b3 block mb-2' style={{ textAlign: 'left' }}>Password</label>
                        <input className='b3' type='text' ref = {input_ref3}></input>
                    </div><br></br>
                    <div>
                        <button className='b7' onClick={click_signup}
                            style={{ backgroundColor: '#9db8a3' }}>Sign Up</button>
                    </div><br></br>
                    <Button str_array={[{ str: 'Log In', back_color: '#9db8a3', link: 'Login' }]} type={7}></Button>
                </div>
            </div>
        </>
    );
}

export default Signup;