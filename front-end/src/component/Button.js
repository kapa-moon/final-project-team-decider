import React from 'react';
import {useNavigate} from "react-router-dom";

function B0({str})
{
    return(  
        <div className = 'bg-dark-pink' style = {{width: '35vw', height: '8vw', fontSize: '2vw', borderRadius: '2vw'}}>
            <span className = 'inline-block align-middle' style = {{padding: '2vw'}}>{str}</span>
        </div>
    );
}

function B1({str})
{
    return(
        <div>
            <label className = 'block mb-2 text-primary' style = {{fontSize: '2vw'}}>{str}</label>
            <input type = 'text' style = {{width: '35vw', height: '8vw', fontSize: '2vw', backgroundColor: '#fff', color: '#000', borderRadius: '2vw'}}></input>
        </div>
    );
}

function B2({str})
{
    let navigate = useNavigate();
    return(
        <div>
            <button onClick = {() => navigate('./Home')} style = {{width: '9.5vw', height: '5vw', padding: '0.5vw', fontSize: '2vw', backgroundColor: '#773A3A', color: 'white', position: 'relative', left: '13vw', top: '2vw', borderRadius: '2vw'}}>{str}</button>
        </div>
    );
}

let component_array = [B0, B1, B2];

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