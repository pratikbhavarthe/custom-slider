import "./App.css";
import CustomSlider from "./Components/CustomSlider";
import React, { useState, useEffect } from "react";
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
        <div className="hyphen" />
        <div className="control-panel">
          <div className="control-panel__item">
            <label>Track</label>
            <input
              value={track}
              type="number"
              onChange={(e) => setTrack(e.target.value)}
            />
          </div>
          <div className="control-panel__item">
            <label>Minimum</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <div className="control-panel__item">
            <label>Maximum</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
        <div className="hyphen" />
      </div>

      <div className="flex-container">
        <CustomSlider min={Number(min)} func={setSliderValue} max={max} track={track} />
      </div>
      <div className="flex-container">
        <div className="flex-container">
          <CustomSlider min={Number(min / 5)} max={max} track={track * 2} />
        </div>
        <div className="flex-container">
          <CustomSlider min={Number(min / 5)} max={max} track={track * 2} />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-container-small">
          <CustomSlider min={Number(min * 2)} max={max / 2} track={track / 4} />
          <CustomSlider min={Number(min2 * 2)} max={max / 3} track={track} />
          <CustomSlider min={Number(min / 5)} max={max} track={track * 2} />
        </div>
        <div className="flex-container-small">
          <CustomSlider min={Number(min / 5)} max={max2 / 1.5} track={track * 2} />
          <CustomSlider min={Number(min / 5)} max={max} track={track * 2} />
          <CustomSlider min={Number(min2)} max={max / 2} track={track} />
        </div>
      </div>

      <pre style={{ letterSpacing: `${Math.abs(sliderValue / 2)}px` }}>
        {`        Custom Slider
          Custom Slider
            Custom Slider
          Custom Slider
          Custom 
                 Slider`}
        {`pra
                ti
                k     bhavarthe`}
      </pre>
      <a id="web" href="https://github.com/pratikbhavarthe/custom-slider" target={"_blank"}>
        Custom Slider
      </a>
    </div>
  );
}

export default App;
