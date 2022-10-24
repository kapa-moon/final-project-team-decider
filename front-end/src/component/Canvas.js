import React, {useRef, useEffect} from 'react';
import './Canvas.css';

function Canvas(props)
{
    let canvas_ref = useRef(null);
  
    function effect()
    {
        let canvas = canvas_ref.current,
        gl = canvas.getContext('webgl');
        gl.clearColor(0.8, 0.8, 0.8, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    
    useEffect(effect);
    return <canvas className = 'canvas0' ref = {canvas_ref} {...props}/>
}

export default Canvas;