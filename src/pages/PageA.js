import React from 'react';
import Canvas from "./../components/Canvas.js"
import Palette from '../components/Palette.js';

import "./../styles/layoutStyle.css"
import letter from "./../Images/WriteA.png"

const PageA = () => {
    
    const validate = () =>{
        alert("Accepted")
    }
    
    return (
        <div className='body'>
            <h2>Draw the letter in the box</h2>
            <div className='container'>
                <div className='imgContainer'>
                    <img className='displayLetter' src={letter} alt='Letter A Guide'></img>
                </div>
                <div className='drawArea'>
                    <Canvas/>
                </div>
                <div className='paletteContainer'>
                    <Palette/>
                    <button className='paletteButton'>Write </button>
                    <button className='paletteButton'>Erase</button>
                    <button className='paletteButton'>Undo</button>
                    <button className='paletteButton' onClick={()=>{window.location.reload();}}>Refresh</button>
                    <button className='navButton' onClick={()=>{validate()}}>Submit</button>
                </div>
            </div>
        </div>
  );
};

export default PageA;