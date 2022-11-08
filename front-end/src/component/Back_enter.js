import React from 'react';
import Button from './Button';

function Back_enter(s)
{
    return(
        <div>
            <Button str_array = {[{str: 'Back', left: 1, cur_id: s.cur_id}]} type = {11}></Button>
            <Button str_array = {[{str: 'Enter', left: 0, cur_id: s.cur_id}]} type = {11}></Button>
        </div>
    );
}

export default Back_enter;