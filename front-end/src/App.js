import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import CreateNewTeam from './component/CreateNewTeam';
import Home from './component/Home';

function App()
{
  return(
    <div>
      <Routes>
        <Route path = '/' element = {<CreateNewTeam/>}/>
        <Route path = '/Home' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;