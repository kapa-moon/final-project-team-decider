import React from 'react';
import Button from './Button';
import mainback from '../image/mainback.png';
import bowl from '../image/bowl.png';

function CreateNewTeam()
{
  return(
    <div className = 'App flex-row justify-start shadow-md rounded-3xl max-h-screen' style = {{width: '50vw', height: '100vh'}}>
        <div className = 'App_body' style = {{backgroundImage: `url(${mainback})`}}>
            <form>
                <img src = {bowl} alt = "bowl" className = 'align-center' style = {{width: '10', height: '10vh', marginLeft: 'auto', marginRight: 'auto', marginTop: '3vh'}}></img><br></br>
                <Button str_array = {['Create a Group']} type = {0}></Button><br></br>
                <Button str_array = {['Join a Group']} type = {1}></Button>
                <Button str_array = {['Enter']} type = {2}></Button><br></br><br></br>
                <Button str_array = {['Be a Long-Term User', 'Long-Term User Log In']} type = {0}></Button>
            </form>
        </div>
    </div>
  );
}

export default CreateNewTeam;