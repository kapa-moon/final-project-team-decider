import React from 'react';
import '../App.css';
import Button from './Button';

function Login()
{
    return(
        <>
            <div className = 'd0 App_body'>
                <Button str_array = {[{str: 'Log In'}]} type = {8}></Button>
                <Button str_array = {[{str: 'Email', text_align: 'left'}]} type = {3}></Button>
                <Button str_array = {[{str: 'Password', text_align: 'left'}]} type = {3}></Button><br></br>
                <Button str_array = {[{str: 'Remember Me', type: 'checkbox', margin_left: '-60px'}]} type = {9}></Button><br></br>
                <Button str_array = {[{str: 'Log In', back_color: '#9db8a3', link: ''}]} type = {7}></Button><br></br>
                <Button str_array = {[{str: 'Sign Up', back_color: '#9db8a3', link: 'Signup'}]} type = {7}></Button><br></br>
                <Button str_array = {[{str: 'Forget Password', back_color: '#9db8a3', link: ''}]} type = {7}></Button><br></br>
            </div>
        </>
    );
}

export default Login;