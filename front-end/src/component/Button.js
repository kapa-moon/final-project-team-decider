import React from 'react';
import {useNavigate} from "react-router-dom";

function B0({str})
{
    return(  
        <div className = 'bg-dark-pink' style = {{width: '35vw', height: '8vw', fontSize: '3vw', borderRadius: '2vw', paddingTop: '1vw'}}>
            <span className = 'inline-block align-middle'>{str}</span>
        </div>
    );
}

function B1({str})
{
    return(
        <div>
            <label className = 'block mb-2 text-primary' style = {{fontSize: '3vw'}}>{str}</label>
            <input type = 'text' style = {{width: '35vw', height: '8vw', fontSize: '3vw', backgroundColor: '#fff', color: '#000', borderRadius: '2vw'}}></input>
        </div>
    );
}

function B2({str})
{
    let navigate = useNavigate();
    return(
        <div>
            <button onClick = {() => navigate('./Home')} style = {{width: '11vw', height: '7.3vw', padding: '0.5vw', fontSize: '3vw', backgroundColor: '#773A3A', color: 'white', position: 'relative', left: '13vw', top: '2vw', borderRadius: '2vw'}}>{str}</button>
        </div>
    );
}

function B3({str})
{
    return(
        <div>
            <label className = 'block mb-2 text-primary' style = {{fontSize: '3vw'}}>{str.str}</label>
            <input type = 'text' placeholder = {str.placeholder} style = {{width: '35vw', height: '8vw', fontSize: '3vw', backgroundColor: '#fff', color: '#000', borderRadius: '2vw'}}></input>
        </div>
    );
}

function B4({str})
{
    let navigate = useNavigate();
    return(
        <div>
            <button onClick = {() => navigate('./Home')} style = {{display: 'inline-block', width: '15vw', height: '6vw', paddingBottom: '0.5vw', fontSize: '3vw', backgroundColor: '#773A3A', color: 'white', position: 'relative', left: str.left ? '-11vw' : '11vw', top: str.left ? '' : '-6vw', borderRadius: '2vw'}}>{str.str}</button>
        </div>
    );
}

let component_array = [B0, B1, B2, B3, B4];

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