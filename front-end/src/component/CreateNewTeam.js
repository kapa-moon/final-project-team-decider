import React, {useState, useEffect} from 'react';
import Button from './Button';
import mainback from '../image/mainback.png';
import bowl from '../image/bowl.png';
import '../App.css';
import './CreateNewTeam.css';
import { Link } from 'react-router-dom';
import Space from './Space';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateNewTeam() {
  const navigate = useNavigate();
  const [groupID, setgroupID] = useState();

  function get_cookie(cookie)
  {
      let name = cookie + "=",
      cookie_array = document.cookie.split(';');
      for(let i = 0; i < cookie_array.length; ++i)
      {
        let c = cookie_array[i];
        while(c.charAt(0) == ' ')
          c = c.substring(1);
        if(c.indexOf(name) == 0)
          return c.substring(name.length, c.length);
      }
      return "";
  }

  let [cur_user_data, set_cur_user_data] = useState({});
  useEffect(() =>
  {
      fetch(`${process.env.REACT_APP_BACK_END_URL}/login/cur_user`,
      {
          method: 'post',
          headers:
          {
              'Content-Type': 'application/json',
          },
          body:
          JSON.stringify
          ({
              cur_username: get_cookie('username'),
          })
      })
      .then(res => res.json())
      .then(data => set_cur_user_data(data))
      .catch(function (error){ console.log(error); });
  });

  let [data, set_data] = useState({});

  function add_group(group_idx)
  {
      navigate('/Home');
      fetch(`${process.env.REACT_APP_BACK_END_URL}/user/addgroup`,
      {
          method: 'post',
          headers:
          {
              'Content-Type': 'application/json',
          },
          body:
          JSON.stringify
          ({
              user_id: cur_user_data.user_id,
              group_idx: group_idx
          })
      })
      .then(res => res.json())
      .then(data => set_data(data))
      .catch(function (error){ console.log(error); });
  }

    // set the user's current group to the group code just created
  const [myCurGroup, setMyCurGroup] = useState(() => {
    const curGroup = window.localStorage.getItem('myCurGroup');
    return !curGroup ? '000': JSON.parse(curGroup);
  });
  
    useEffect(() => {
          window.localStorage.setItem('myCurGroup', JSON.stringify(myCurGroup));
  }, [myCurGroup]);
  
  async function getGroup()
  {
  const groupID = document.getElementById('joinGroup').value;
  axios.get(`${process.env.REACT_APP_BACK_END_URL}/groups/idx/${groupID}`).then(res => {
    console.log(res.data);
    if(res.data.length === 0)
    {
      alert("Group does not exist.");
    } else {
      localStorage.setItem('myCurGroup', JSON.stringify(groupID));
      alert("Group joined.");
      add_group(groupID);
      navigate('Recommend');
    }
  }).catch(err => {
    console.log(err);
    alert("Group ID is not valid");
  })
 }

  return (
    <div className='d0'>
      <div className='App_body' style={{ backgroundImage: `url(${mainback})` }}>
        <form>
          <img src={bowl} alt='bowl' className='img0 align-center'></img><br></br>
          <Button str_array={[{ str: 'Create a Group', link: 'Home' }]} type={7}></Button><br></br>
          <div>
          <label className='b1 block mb-2'>{}</label>
          <input id='joinGroup' className='b1' type='text' placeholder="Enter Group ID" onChange={e => setgroupID(e.target.value)}></input>
          </div>
          <div>
           <button className='b2' type = 'button' onClick={getGroup}>Enter</button>
          </div>
          <br></br><br></br><br></br>
          <Link to='Signup' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Sign Up</Link>
          <Space n={20}></Space>
          <Link to='Login' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Log In</Link>
        </form>
      </div>
    </div>
  );
}

export default CreateNewTeam;