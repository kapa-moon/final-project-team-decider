import React, {useState, useEffect} from 'react';
import '../App.css';
import './Home.css';
import './View.css';
import Button from './Button';

function View()
{
    let [data, set_data] = useState({});
    useEffect(() =>
    {
        fetch('http://localhost:4000/groups')
        .then(res => res.json())
        .then(data => set_data(data));
    }, []);

    return(
        <div className = 'home_body App flex-row view0'>
            Group List
            {data.length ? 
            data.map(d =>
                <div>
                    {d.id}
                </div>) : 0}
            <Button str_array = {[{str: 'Back', left: 1}]} type = {11}></Button>
        </div>
    );
}

export default View;