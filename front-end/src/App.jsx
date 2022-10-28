import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateNewTeam from './component/CreateNewTeam';
import Home from './component/Home';
import Group from './component/Group';
import Recommend from './component/Recommend';
import TeamInfo from './component/TeamInfo';
import Map from './component/Map';
import Login from './component/Login';
import Signup from './component/Signup';
import Go from './component/Go';

function App() {
  return (
    <div className='App p-6 max-h-screen flex justify-center min-w-screen max-w-screen md: max-w-800'>
      {/* <div className='min-w-full max-w-full'> */}
      <div>
        <div className='routes h-2/3'>
          <Routes>
            <Route path='/' element={<CreateNewTeam />} />
            <Route path='/home' element={<Home />} />
            <Route path='/team_info' element={<TeamInfo />} />
            <Route path='/group' element={<Group />} />
            <Route path='/recommend' element={<Recommend />} />
            <Route path='/map' element={<Map />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/go' element={<Go />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;