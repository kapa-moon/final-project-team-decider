import React, {useRef} from 'react';
import '../App.css';
import Button from './Button';
import {useNavigate} from "react-router-dom";
import sha256 from 'crypto-js/sha256';

export let cur_username = null;

function Login()
{
    function set_cookie(name, value, day)
    {
        let d = new Date();
        d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    let input_ref = useRef(null),
    input_ref2 = useRef(null),
    navigate = useNavigate();

    function click_login()
    {
        fetch(`http://localhost:4000/login`,
        {
            method: 'post',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body:
            JSON.stringify
            ({
                username: input_ref.current.value,
                hash: sha256(input_ref2.current.value).toString()
            })
        })
        .then((res) =>
        {
            if(!res.ok)
                alert(`Username or password may be incorrect.`);
            else
            {
                set_cookie('username', input_ref.current.value, 365);
                alert(`Logged into username ${input_ref.current.value}.`);
                navigate('/');
            }
            return res.blob();
        });
    }

    return(
        <>
            <div className='d0'>
                <div className=' App_body'>
                    <Button str_array={[{ str: 'Log In' }]} type={8}></Button>
                    <Button str_array={[{ str: 'Username', text_align: 'left', ref: input_ref }]} type={13}></Button>
                    <Button str_array={[{ str: 'Password', text_align: 'left', ref: input_ref2 }]} type={13}></Button><br></br>
                    <Button str_array={[{ str: 'Remember Me', type: 'checkbox', margin_left: '-60px' }]} type={9}></Button><br></br>
                    <div>
                        <button className='b7' onClick={click_login}
                            style={{ backgroundColor: '#9db8a3' }}>Log In</button>
                    </div><br></br>
                    <Button str_array={[{ str: 'Sign Up', back_color: '#9db8a3', link: 'Signup' }]} type={7}></Button><br></br>
                    <Button str_array={[{ str: 'Forget Password', back_color: '#9db8a3', link: '' }]} type={7}></Button><br></br>
                </div>
            </div>
        </>
    );
}

export default Login;