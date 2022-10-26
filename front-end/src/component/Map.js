import React from 'react';
import '../App.css';
import './Map.css';
import './Canvas.css';
import Selector from './Selector';
import Button from './Button';
import Canvas from './Canvas';

function Map()
{
    let text = `
    Location Name
    Location Address
    Location Type
    Location Description`;

    return(
        <>
            <div className = 'd0'>
                <Selector></Selector>
                <Canvas className = 'canvas0'></Canvas>
                <textArea className = 'textarea0'>{text}</textArea>
                <Button str_array = {['Group Information']} type = {6}></Button>
            </div>
        </>
    );
}

export default Map;