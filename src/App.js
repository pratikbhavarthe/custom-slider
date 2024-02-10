import "./App.css";
import CustomSlider from "./Components/CustomSlider";
import React, { useState, useEffects } from "react";
function App() {
  const [track, setTrack] = useState(5);
  const [min, setMin] = useState(Number(-5));
  const [max, setMax] = useState(55);
  const [min2, setMin2] = useState(Number(-5));
  const [max2, setMax2] = useState(55);
  const [sliderValue, setSliderValue] = useState(0);
  useEffect(() => {
    setMin(Math.round(Math.random() * 5) - 10);
    setMax(Math.round(Math.random() * 150) + 50);

    setMin2(Math.round(Math.random() * 5));
    setMax2(Math.round(Math.random() * 150) + 25);
  }, []);
  return (
    <div className="App">
      <div className="control-panel-container">
        <div className="hypen"/>
        <div className="control-panel">
          <div className="control-panel__item">
            <label>Track</label>
            <input value={track} type="number" onChange={(e) => setTrack(e.target.value)}/>
          </div>
          <div className="control-panel__item">
            <label>Minimum</label>
            <input type="number" value={max} onChange={(e) => setMin(e.target.value)}/>
          </div>
          <div className="control-panel__item">
            <label>Maximum</label>
            <input type="number" value={max} onChange={(e) => setMax(e.target.value)}/>
          </div>
        </div>
        <div className="hyphen"/>
      </div>
      
    </div>
  )
}