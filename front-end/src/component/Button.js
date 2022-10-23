import React from 'react';
import './Button.css';
import {useNavigate} from "react-router-dom";

function B0({str})
{
    return(  
        <div className = 'b0 bg-dark-pink'>
            <span className = 'inline-block align-middle'>{str}</span>
        </div>
    );
}

function B1({str})
{
    return(
        <div>
            <label className = 'b1 block mb-2 text-primary'>{str}</label>
            <input className = 'b1' type = 'text'></input>
        </div>
    );
}

function B2({str})
{
    let navigate = useNavigate();
    return(
        <div>
            <button className = 'b2' onClick = {() => navigate('./Home')}>{str}</button>
        </div>
    );
}

function B3({str})
{
    return(
        <div>
            <label className = 'b3 block mb-2 text-primary'>{str.str}</label>
            <input className = 'b3' type = 'text' placeholder = {str.placeholder}></input>
        </div>
    );
}

function B4({str})
{
    let navigate = useNavigate();
    return(
        <div>
            <button className = 'b4' onClick = {() => str.left ? navigate('/') : navigate('/team_info')} style = {{left: str.left ? '-11vw' : '11vw', top: str.left ? '' : '-6vw'}}>{str.str}</button>
        </div>
    );
}

function B5({str})
{
    return(  
        <div className = 'b5 bg-dark-pink align-top'>
            <span className = 'inline-block align-top'>{str}</span>
        </div>
    );
}

let component_array = [B0, B1, B2, B3, B4, B5];

function Button({str_array, type})
{
    let a = [];
    if(str_array)
    {
        for(let i = 0; i < str_array.length; ++i)
        {
            let Component = component_array[type];
            a.push(<Component str = {str_array[i]} key = {i}/>);
        }
    }
    return(
        <div className = 'grid grid-cols-1 justify-items-center items-center' style = {{gap: '5vh'}}>
            {a}
        </div>
    );
}

export default Button;