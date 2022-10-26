import React from 'react';
import Button from './Button';

function TeamInfo()
{
    return(
        <div className = 'App flex-row justify-start shadow-md rounded-3xl max-h-screen' style = {{width: '50vw', height: '100vh'}}>
            <div className = 'App_body'>
                <Button str_array = {['Group Information']} type = {0}></Button>
                <div style = {{marginTop: '2.5vw'}}><Button str_array = {['']} type = {1}></Button></div>
                <div style = {{marginTop: '2.5vw'}}><Button str_array = {[{str: '', placeholder: 'Copy Link'}]} type = {3}></Button></div>
                <div style = {{marginTop: '2.5vw'}}><Button str_array = {['Join a Group']} type = {0}></Button></div>
            </div>
        </div>
      );
}

export default TeamInfo;