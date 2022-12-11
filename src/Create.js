import {Form} from "./Form";
import {CanvasPanel} from "./CanvasPanel";
import {Stage, Layer,Rect} from 'react-konva';

import React, { useLayoutEffect, useState, useRef } from 'react';


export function Create() {
    const [panelDimentions, setPanelDimentions] = useState('');
    
 
    
    const panels = [
        {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: '#00D1B2',
        shadowBlur: 5
    },
    {
        x: 200,
        y: 200,
        width: 100,
        height: 100,
        fill: '#00D1B2',
        shadowBlur: 5
    }
    ]



    console.log(panels);

    function handleSubmit(panelDimention) {
        setPanelDimentions(panelDimention);

    };


    let sum = +panelDimentions?.panelWidth + 7;
  return (
    <>
    <Form onSubmit={handleSubmit} />
    <div>Here: {sum}</div>

    <CanvasPanel panels = {panels}/>

  
    </>
  );
}

