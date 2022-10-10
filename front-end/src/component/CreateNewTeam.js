import React from 'react';
import { useNavigate } from "react-router-dom";

function CreateNewTeam()
{
  let navigate = useNavigate();

  return(
    <div className = 'App'>
        <header className = 'App_body'>
            <form>
                <button type = 'button'>Create New Team</button><br></br><br></br>
                <input type = 'text' placeholder = 'Enter Team Code'></input><br></br><br></br>
                <button onClick = {() => navigate('./Home')}>Submit</button><br></br><br></br>
                <button type = 'button'>Be a Long-Term User</button><br></br><br></br>
                <button type = 'button'>Long-Term User Log In</button>
            </form>
        </header>
    </div>
  );
}

export default CreateNewTeam;