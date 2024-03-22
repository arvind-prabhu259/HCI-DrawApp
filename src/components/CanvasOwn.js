import React, { useState, useEffect, useRef} from 'react';

const Canvas = props => {
    const [canvasState, setCanvasState] = useState();
    const canvasRef = useRef(null);
    const { draw, ...rest } = props

    useEffect(() => {
        const canvas =  canvasRef.current;
        canvas.width = 450
        canvas.height = 450
        const context = canvas.getContext('2d');
        let frameCount = 0
        let animationFrameId

        context.fillStyle = '#D0D0D0';
        context.fillRect(0,0,context.canvas.width, context.canvas.height)

        const render = () => {
                frameCount++
                draw(context, frameCount)
                animationFrameId = window.requestAnimationFrame(render)
        }
        render()
            
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    },[draw])

    return (
        <div>
            <canvas ref = {canvasRef} {...props}/>
        </div>
    );
};  
export default Canvas;

// import CanvasDraw from 'react-canvas-draw';
// <CanvasDraw
//     ref={(canvasDraw) => setCanvasState(canvasDraw)}
//     brushColor="#000"
//     brushRadius={3}
//     canvasWidth={500}
//     canvasHeight={450}
//     lazyRadius={0}
//     backgroundColor='grey'
// />