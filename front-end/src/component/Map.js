import React from 'react';
import '../App.css';
import './Map.css';
import './Canvas.css';
import Selector from './Selector';
import Button from './Button';
import MapDetail from './MapDetail';

function Map()
{
    let text = `
    Location Name
    Location Address
    Location Type
    Location Description`;

    const mapIsReadyCallback = (map) => {console.log(map);}

    return(
        <>
            <div className = 'd0'>
                <Selector></Selector>
                <div className = 'h-3/6'>
                <MapDetail mapIsReadyCallback={mapIsReadyCallback} />
                </div>
                
                <textArea className = 'textarea0'>{text}</textArea>
                <Button str_array = {['Group Information']} type = {6}></Button>
            </div>
        </>
    );
}

export default Map;