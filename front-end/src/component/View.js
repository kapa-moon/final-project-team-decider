import React, {useState, useEffect, useRef} from 'react';
import '../App.css';
import './Home.css';
import './View.css';
import './Button.css';
import { useNavigate } from "react-router-dom";

function View()
{
    let [data, set_data] = useState({}),
    navigate = useNavigate(),
    input_ref = useRef(null);

    function handle_click()
    {
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

    useEffect(() =>
    {
        fetch('http://localhost:4000/groups')
        .then(res => res.json())
        .then(data => set_data(data));
    }, []);

    return(
        <div className = 'home_body App flex-row view0'>
            Group List
            <div style = {{width: '250px', height: '200px', overflowX: 'scroll', overflowY: 'scroll'}}>
            {data.length ? 
            data.map(d =>
                <div>
                    {d.idx}
                </div>) : ''}
            </div>
            <br></br><br></br>
            <div>
                <label className='b1 block mb-2'>Remove a Group</label>
                <input className='b1' type='text' placeholder = 'Group Number' ref = {input_ref}></input>
            </div>
            <div>
                <button className='b4_2' onClick={() => navigate('/Home')} style={{ left: '-80px'}}>Back</button>
            </div>
            <div>
                <button className='b4_2' onClick = {() => handle_click()} style={{ left: '80px', top: '-26px'}}>Remove</button>
            </div>
            <br></br>
            <div style = {{fontSize: '17px'}}>Click group information to hide popup.</div>
        </div>
    );
}

export default View;