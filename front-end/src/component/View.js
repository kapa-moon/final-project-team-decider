import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './Home.css';
import './View.css';
import './Button.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function View() {
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

    const [user_id, setUser_id] = useState("");
    const [cur_group_id, setGroup_id] = useState("");

    let [cur_user_data, set_cur_user_data] = useState("");
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
    }, []);

    function getUserID() {
        axios.get(`${process.env.REACT_APP_BACK_END_URL}/user/`)
            .then(res => {
                setUser_id(res.data[2].user_id);
                setGroup_id(res.data[2].current_group);
            }
            )
            .catch(function (error) { console.log(error); })
    }
    useEffect(() => {
        getUserID();
    }, []);
    console.log(user_id);

    let navigate = useNavigate(),
        input_ref = useRef(null);

    function handle_click() {
        alert(`Group ${input_ref.current.value} removed.`);
        fetch(`${process.env.REACT_APP_BACK_END_URL}/user/removegroup`,
        {
            method: 'delete',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body:
            JSON.stringify
            ({
                user_id: cur_user_data.user_id,
                group_idx: input_ref.current.value
            })
        })
        .then(res => res.json())
        .catch(function (error){ console.log(error); });
        window.location.reload(false);
    }

    let [data, set_group_data] = useState({});
    useEffect(() => {
        fetch('${process.env.REACT_APP_BACK_END_URL}/groups')
            .then(res => res.json())
            .then(data => set_group_data(data))
            .catch(function (error){ console.log(error); });
    }, []);

    async function swtichGroup({ user_id, str }) {
        console.log(user_id + "hahah switched to group" + str);
        var group_idx = {
            current_group: str
        }
        axios.post(`${process.env.REACT_APP_BACK_END_URL}/user/switchgroup/${user_id}`, group_idx)
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) { console.log(error); })

        window.location.reload(true);

    }

    function hey() {
        console.log("hey");
    }

    const Switcher = ({ user_id, str }) => {
        console.log(user_id + " switched to group " + str);
        return (
            <div className='p-3'>
                <p className='text-primary rounded-lg bg-bubble-green text-lg p-3' onClick={() => swtichGroup({ user_id, str })}>{str}</p>
            </div>
        );
    }
    var count = 0;

    let my_groups_array = [],
    [group_i, set_group_i] = useState({});
    useEffect(() =>
    {
        for(let i = 0; i < cur_user_data.my_groups; ++i)
        {
            fetch(`${process.env.REACT_APP_BACK_END_URL}/groups/idx/${cur_user_data.my_groups[i]}`)
            .then(res => res.json())
            .then(data => set_group_i(data))
            .catch(function (error){ console.log(error); });
            my_groups_array.push(group_i);
        }
    }, []);

    function set_cookie(name, value, day)
    {
        let d = new Date();
        d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function handle_logout()
    {
        alert('Logged out.');
        set_cookie('username', '', 0);
        navigate('/');
    }

    function handle_remove_all()
    {
        alert(`All groups removed.`);
        fetch(`${process.env.REACT_APP_BACK_END_URL}/user/remove_all_group`,
        {
            method: 'delete',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body:
            JSON.stringify
            ({
                user_id: cur_user_data.user_id,
            })
        })
        .then(res => res.json())
        .catch(function (error){ console.log(error); });
        window.location.reload(false);
    }

    if(cur_user_data && cur_user_data.username)
    {
        return (
            <div className='home_body App flex-row view0'>
                <div>{'User ' + cur_user_data.username}</div>
                <div>{'Current group' + ' ' + JSON.parse(window.localStorage.getItem('myCurGroup'))}</div>
                <br></br>
                Group List
                <div style={{ width: '250px', height: '200px', overflowX: 'scroll', overflowY: 'scroll' }} className="overflow-scroll h-9">
                    {cur_user_data ?
                        cur_user_data.my_groups.map(d =>
                            <div key={++count}>
                                <Switcher str={d} user_id={user_id} ></Switcher>
                            </div>) :
                        data.length ? data.map(d =>
                            <div key={++count}>
                                <Switcher str={d.idx} user_id={user_id} ></Switcher>
                            </div>) : ''}
                </div>
                <br></br>
                <div>
                    <label className='b1 block mb-2'>Remove a group from group list</label>
                    <input className='b1' type='text' placeholder='Group Number' ref={input_ref}></input>
                </div>
                <div>
                    <button className='b4_2' onClick={() => navigate('/Home')} style={{ left: '-80px' }}>Back</button>
                </div>
                <div>
                    <button className='b4_2' onClick={() => handle_click()} style={{ left: '80px', top: '-26px' }}>Remove</button>
                </div>
                <a href onClick={handle_remove_all} style={{textDecoration: 'underline', color: '#723d46', fontSize: '20px' }}>Remove all group from group list</a>
                <a href onClick={handle_logout} style={{textDecoration: 'underline', color: '#723d46', fontSize: '20px' }}>Log out</a>
                <div style={{ fontSize: '17px' }} className="text-primary-gray">👇 Click group information to hide popup.</div>
            </div>
        );
    }

    else
    {
        return (
            <div className='home_body App flex-row view0'>
                <div>Login to access more features.</div>
                <div style={{ fontSize: '17px' }} className="text-primary-gray">👇 Click group information to hide popup.</div>
            </div>
        );
    }
}

export default View;