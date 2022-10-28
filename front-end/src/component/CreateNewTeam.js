import React from 'react';
import Button from './Button';
import mainback from '../image/mainback.png';
import bowl from '../image/bowl.png';
import '../App.css';
import './CreateNewTeam.css';
import { Link } from 'react-router-dom';
import Space from './Space';

function CreateNewTeam() {
  return (
    <div className='d0'>
      <div className='App_body' style={{ backgroundImage: `url(${mainback})` }}>
        <form>
          <img src={bowl} alt='bowl' className='img0 align-center'></img><br></br>
          <Button str_array={[{ str: 'Create a Group', link: 'Home' }]} type={7}></Button><br></br>
          <Button str_array={['Join a Group']} type={1}></Button>
          <Button str_array={['Enter']} type={2}></Button><br></br><br></br><br></br>
          <Link to='Signup' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Sign Up</Link>
          <Space n={20}></Space>
          <Link to='Login' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Log In</Link>
        </form>
      </div>
    </div>
  );
}

export default CreateNewTeam;