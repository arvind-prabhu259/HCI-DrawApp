import React, { useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Canvas = () => {
    const [canvasState, setCanvasState] = useState();
    const [erase, setErase] = useState(false);

    useEffect(()=>{
        // window.location.reload();
        setErase(true);
    },[erase]);

    return (
        <div>
            <button onClick={()=>{setErase(!erase)}}>Erase</button>
            <CanvasDraw
                ref={(canvasDraw) => setCanvasState(canvasDraw)}
                brushColor={erase? "0F0F0F":"#000000"}
                brushRadius={3}
                canvasWidth={450}
                canvasHeight={450}
                lazyRadius={0}
                backgroundColor='grey'
            />
        </div>
    );
};  
export default Canvas;