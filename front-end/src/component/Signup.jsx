import React from 'react';
import '../App.css';
import Button from './Button';

function Signup()
{
    return(
        <>
            <div className = 'd0'>
                <div className = 'App_body'>
                    <Button str_array = {[{str: 'Sign Up'}]} type = {8}></Button>
                    <Button str_array = {[{str: 'Name', text_align: 'left'}]} type = {3}></Button>
                    <Button str_array = {[{str: 'Email', text_align: 'left'}]} type = {3}></Button>
                    <Button str_array = {[{str: 'Password', text_align: 'left'}]} type = {3}></Button><br></br>
                    <Button str_array = {[{str: 'Sign Up', back_color: '#9db8a3', link: ''}]} type = {7}></Button><br></br>
                    <Button str_array = {[{str: 'Log In', back_color: '#9db8a3', link: 'Login'}]} type = {7}></Button>
                </div>
            </div>
        </>
    );
}

export default Signup;