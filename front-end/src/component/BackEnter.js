import React from 'react';
import Button from './Button';

function BackEnter()
{
    return(
        <div>
            <Button str_array = {[{str: 'Back', left: 1}]} type = {4}></Button>
            <Button str_array = {[{str: 'Enter', left: 0}]} type = {4}></Button>
        </div>
    );
}

export default BackEnter;