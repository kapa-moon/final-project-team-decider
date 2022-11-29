import React from 'react';
import Button from './Button';
import mainback from '../image/mainback.png';
import bowl from '../image/bowl.png';
import '../App.css';
import './CreateNewTeam.css';
import { Link } from 'react-router-dom';
import Space from './Space';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function CreateNewTeam() {
  return (
    <div className='d0'>
      <div className='App_body' style={{ backgroundImage: `url(${mainback})` }}>
        <form>
          <img src={bowl} alt='bowl' className='img0 align-center'></img><br></br>
          <Button str_array={[{ str: 'Create a Group', link: 'Home' }]} type={7}></Button><br></br>
          <JoinButton str_array={['Join a Group']} type={1}></JoinButton>
          <EnterButton str_array={['Enter']} type={2}></EnterButton><br></br><br></br><br></br>
          <Link to='Signup' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Sign Up</Link>
          <Space n={20}></Space>
          <Link to='Login' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Log In</Link>
        </form>
      </div>
    </div>
  );
}

function JoinButton({str}) {
  const [groupID, setGroupID] = React.useState('');
  const handleChange = event => {
    setGroupID(event.target.value);
  };
  return (
      <div>
          <label className='b1 block mb-2'>{str}</label>
          <input id='joinGroup' className='b1' type='text' onChange={handleChange} value={groupID}></input>
      </div>
  );
}

const EnterButton= () => {
   return (
       <div>
           <button className='b2' type = 'button' onClick={OnClickHandler}>Enter</button>
       </div>
   );
 }

function OnClickHandler()
 {
  console.log("Clicked")
  const groupID = document.getElementById('joinGroup').value;
  console.log(groupID);
   if (groupID.length == 0) {
     alert('Please enter a group ID.');
   } else {
    try {
      axios.get(`http://localhost:4000/groups/idx/${groupID}`).then((response) => console.log(response)).then((data) => {
       if (data.length === 0) {
         alert('Group does not exist');
       } else {
          alert('Group joined');
         //navigate('/Group');
       }
       console.log(data);
      }).catch(err => console.log(err));
      } catch (err) {
        alert('Group does not exist');
        console.log(err);
      }
  }
 }

export default CreateNewTeam;