import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './Home.css';
import './View.css';
import './Button.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function View() {
    const [user_id, setUser_id] = useState("");
    const [cur_group_id, setGroup_id] = useState("");

    let user_update = 0;
    let [cur_user_data, set_cur_user_data] = useState("");
    useEffect(() =>
    {
        fetch(`http://localhost:4000/login/cur_user`)
        .then(res => res.json())
        .then(data => set_cur_user_data(data));
    }, [user_update]);

    function getUserID() {
        axios.get(`http://localhost:4000/user/`)
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
        fetch(`http://localhost:4000/groups/idx/${input_ref.current.value}`,
        {
            method: 'delete',
            headers:
            {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json());
        fetch(`http://localhost:4000/user/removegroup`,
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
        .then(res => res.json());
        ++user_update; 
        window.location.reload(false);
    }

    let [data, set_group_data] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/groups')
            .then(res => res.json())
            .then(data => set_group_data(data));
    }, []);

    async function swtichGroup({ user_id, str }) {
        console.log(user_id + "hahah switched to group" + str);
        var group_idx = {
            current_group: str
        }
        axios.post(`http://localhost:4000/user/switchgroup/${user_id}`, group_idx)
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
            fetch(`http://localhost:4000/groups/idx/${cur_user_data.my_groups[i]}`)
            .then(res => res.json())
            .then(data => set_group_i(data));
            my_groups_array.push(group_i);
        }
    }, []);

    function handle_logout()
    {
        alert('Logged out.');
        fetch(`http://localhost:4000/login/logout`)
        .then(res => res.json());
        window.location.reload(false);
    }

    return (
        <div className='home_body App flex-row view0'>
            <div>{cur_user_data ? 'User ' + cur_user_data.username : ''}</div>
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
                <label className='b1 block mb-2'>Remove a Group</label>
                <input className='b1' type='text' placeholder='Group Number' ref={input_ref}></input>
            </div>
            <div>
                <button className='b4_2' onClick={() => navigate('/Home')} style={{ left: '-80px' }}>Back</button>
            </div>
            <div>
                <button className='b4_2' onClick={() => handle_click()} style={{ left: '80px', top: '-26px' }}>Remove</button>
            </div>
            <br></br>
            <a href onClick={handle_logout} style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>Log Out</a>
            <div style={{ fontSize: '17px' }} className="text-primary-gray">👇 Click group information to hide popup.</div>
        </div>
    );
}

export default View;