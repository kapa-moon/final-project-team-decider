import React, { useState, useEffect } from 'react';
import './Button.css';
import { useNavigate } from "react-router-dom";
import View from './View';
import Popup from 'reactjs-popup';
import Space from './Space';
import Memcpy from './Memcpy';
import axios from 'axios';

function B0({ str }) {
    return (
        <div className='b0'>
            <span className='inline-block align-middle'>{str}</span>
        </div>
    );
}

function B1({ str }) {
    return (
        <div>
            <label className='b1 block mb-2'>{str}</label>
            <input className='b1' type='text'></input>
        </div>
    );
}

function B2({ str }) {
    let navigate = useNavigate();
    return (
        <div>
            <button className='b2' onClick={() => navigate('/Group')}>{str}</button>
        </div>
    );
}

function B3({ str }) {
    return (
        <div>
            <label className='b3 block mb-2' style={{ textAlign: str.text_align }}>{str.str}</label>
            <input className='b3' type='text' placeholder={str.placeholder}></input>
        </div>
    );
}

function B4({ str }) {
    let navigate = useNavigate();
    return (
        <div>
            <button className='b4' onClick={() => str.left ? navigate('/') : navigate('/Group')} style={{ left: str.left ? '-80px' : '80px', top: str.left ? '' : '-26px' }}>{str.str}</button>
        </div>
    );
}

function B5({ str }) {
    return (
        <div className='b5 bg-dark-pink align-top'>
            <span className='inline-block align-top'>{str}</span>
        </div>
    );
}

function B6({ str }) {
    return (
        <div>
            <Popup trigger={<button className='b6'>{str}</button>} position="top center"><View></View></Popup>
        </div>
    );
}

function B7({ str }) {
    let navigate = useNavigate();
    return (
        <div>
            <button className='b7'
                onClick={() => navigate('/' + str.link)}
                style={{ color: str.color, backgroundColor: str.back_color }}>{str.str}</button>
        </div>
    );
}

function B8({ str }) {
    return (
        <div>
            <label className='b8' style={{ textAlign: str.text_align }}>{str.str}</label>
        </div>
    );
}

function B9({ str }) {
    return (
        <div>
            <input className='b9' type={str.type} style={{ marginLeft: str.margin_left }}></input>
            <Space n={3}></Space><label className='b9'>{str.str}</label>
        </div>
    );
}

function B10({ str }) {
    let input = 'input0';

    function Input_function() {
        return (
            <input id={input} className='b3' type='text' value={str.placeholder} style={{ marginLeft: '-2px', marginTop: '-2px' }}></input>
        );
    }

    return (
        <div>
            <label className='b3 block mb-2' style={{ textAlign: str.text_align }}>{str.str}</label>
            <button className='b7' onClick={() => Memcpy(input)}><Input_function></Input_function></button>
        </div>
    );
}

function B11({ str }) {
    let [data, set_data] = useState({}),
        navigate = useNavigate();

    function Handle_click_B11() {
        navigate('/Home');
        alert(`Group ${str.cur_id} created.`);
        fetch(`http://localhost:4000/groups/add`,
            {
                method: 'post',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body:
                    JSON.stringify
                        ({
                            idx: str.cur_id,
                        })
            })
            .then(res => res.json())
            .then(data => set_data(data));
    }

    return (
        <div>
            <button className='b4_2' onClick={() => str.left ? navigate('/') : Handle_click_B11()} style={{ left: str.left ? '-80px' : '80px', top: str.left ? '' : '-26px' }}>{str.str}</button>
        </div>
    );
}

function B12({ str }) {
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

}

let component_array = [B0, B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11];

function Button({ str_array, type }) {
    let a = [];
    if (str_array) {
        for (let i = 0; i < str_array.length; ++i) {
            let Component = component_array[type];
            a.push(<Component str={str_array[i]} key={i} />);
        }
    }
    return (
        <div className='grid grid-cols-1 justify-items-center items-center' style={{ gap: '50px' }}>
            {a}
        </div>
    );
}

export default Button;