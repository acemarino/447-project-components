import {Form} from "./Form";
import {PanelDrawing} from "./PanelDrawing";
import {Stage, Layer,Rect} from 'react-konva';

import React, { useLayoutEffect, useState } from 'react';


export function Create() {
    const [panelDimentions, setPanelDimentions] = useState('');
    const [roofDimentios, setRoofDimentions] = useState('');
    const [spacingDimentions, setSpacingDimentions] = useState('');
  

    function handleSubmit(panelDimention,roofDimention,spacingDimention) {
        setPanelDimentions(panelDimention);
        


    };

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

    let sum = +panelDimentions?.panelWidth + 7;
  return (
    <>
    <Form onSubmit={handleSubmit} />
    <div>Here: {sum}</div>
    <PanelDrawing panels = {panels}/>

  
    </>
  );
}

