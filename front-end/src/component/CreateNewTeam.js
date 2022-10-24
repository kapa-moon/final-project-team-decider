import React from 'react';
import Button from './Button';
import mainback from '../image/mainback.png';
import bowl from '../image/bowl.png';
import '../App.css';
import './CreateNewTeam.css';

function CreateNewTeam()
{
  return(
    <div className = 'd0'>
        <div className = 'App_body' style = {{backgroundImage: `url(${mainback})`}}>
            <form>
                <img src = {bowl} alt = 'bowl' className = 'img0 align-center'></img><br></br>
                <Button str_array = {[{str: 'Create a Group'}]} type = {7}></Button><br></br>
                <Button str_array = {['Join a Group']} type = {1}></Button>
                <Button str_array = {['Enter']} type = {2}></Button><br></br><br></br>
                <Button str_array = {[{str: 'Be a Long-Term User', link: 'Signup'}, {str: 'Long-Term User Log In', link: 'Login'}]} type = {7}></Button>
            </form>
        </div>
    </div>
  );
}

export default CreateNewTeam;