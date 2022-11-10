import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';
import Space from './Space';

function Back_enter(s)
{
    return(
        <div>
            <Button str_array = {[{str: 'Back', left: 1, cur_id: s.cur_id}]} type = {11}></Button>
            <Button str_array = {[{str: 'Enter', left: 0, cur_id: s.cur_id}]} type = {11}></Button><br></br>
            <br></br>
            <Link to = '/view' style={{ textDecoration: 'none', color: '#723d46', fontSize: '20px' }}>View</Link>
        </div>
    );
}

export default Back_enter;