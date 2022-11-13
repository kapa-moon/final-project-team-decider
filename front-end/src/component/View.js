import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './Home.css';
import './View.css';
import './Button.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function View() {
    const [user_id, setUser_id] = useState("");
    const [cur_group_id, setGroup_id] = useState("");

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

    let [data, set_data] = useState({}),
        navigate = useNavigate(),
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
        window.location.reload(false);
    }

    useEffect(() => {
        fetch('http://localhost:4000/groups')
            .then(res => res.json())
            .then(data => set_data(data));
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
        console.log(user_id + "switched to group" + str);
        return (
            <div className='p-3'>
                <p className='text-primary rounded-lg bg-bubble-green text-lg p-3' onClick={() => swtichGroup({ user_id, str })}>{str}</p>
            </div>
        );
    }
    var count = 0;

    return (
        <div className='home_body App flex-row view0'>
            Group List
            <div style={{ width: '250px', height: '200px', overflowX: 'scroll', overflowY: 'scroll' }} className="overflow-scroll h-9">
                {data.length ?
                    data.map(d =>
                        <div key={count++}>
                            {/* {d.idx} */}
                            <Switcher str={d.idx} user_id={user_id} ></Switcher>
                        </div>) : ''}
            </div>
            <br></br><br></br>
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
            <div style={{ fontSize: '17px' }} className="text-primary-gray">👇 Click group information to hide popup.</div>
        </div>
    );
}

export default View;