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
        {`        My Eyes
          Fe!n Cola
            Feel Good
          Another Me
          Rumble 
                 Breathing`}
        {`
                pratik
                    bhavarthe`}
      </pre>
      <a id="web" href="https://github.com/pratikbhavarthe/custom-slider" target={"_blank"}>
      <svg
          width="25"
          height={25}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill=" rgb(105, 105, 105)"
        >
                    <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />

        </svg>
        GITHUB
      </a>
    </div>
  );
}

export default App;
