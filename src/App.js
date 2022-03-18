
import './App.scss';
import React, { Component } from 'react';
import Timer from './container/timer/Timer';
import Topbar from './container/topbar/Topbar';
import sound from './music.mp3'
import { useState, useRef } from 'react';

function App() {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio(sound))

  const Start = () => {
    audio.current.play()
    setPlaying(true);
  }

  const Stop = () => {
    audio.current.pause()
    setPlaying(false);
  }
  return (
    
    <div className="App">
     
    
      <Topbar/>
      <div className="sections">
  
         <Timer/>
         {playing ? <button onClick={Stop}>{"Stop"}</button> : 
         <button onClick={Start}>{"Play"}</button>}
      </div>  

    </div>
  );

}

export default App;
