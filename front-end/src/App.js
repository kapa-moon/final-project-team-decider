import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import CreateNewTeam from './component/CreateNewTeam';
import Home from './component/Home';
import Group from './component/Group';
import Recommend from './component/Recommend';
import TeamInfo from './component/TeamInfo';

function App()
{
  return(
    <div className='App max-h-screen flex justify-center min-w-screen md: max-w-800'>
      <div>
        <div className='routes h-2/3'>
          <Routes>
            <Route path='/' element={<CreateNewTeam />} />
            <Route path='/home' element={<Home />} />
            <Route path='/team_info' element={<TeamInfo />} />
            <Route path='/group' element={<Group />} />
            <Route path='/recommend' element={<Recommend />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;