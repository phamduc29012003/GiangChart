import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { FaTemperatureHigh } from "react-icons/fa6";
import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
import { WiHumidity } from "react-icons/wi";
import { CiLight } from "react-icons/ci";
import React from "react";
import { Switch } from "antd";
import { PiFanFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";

function App() {
  const [active, setActive] = useState(false);
  const [light, setLight] = useState(false);

  const onclick = () => {
    setActive((prevActive) => !prevActive);
  };
  console.log(active);
  const handleLamp = () => {
    setLight((prevLight) => !prevLight);
  };
  return (
    <div className="App">
      <div className="dataCard degree bg-degree center-item">
        <div className="font-size center-item ">
          50°C <FaTemperatureHigh />
        </div>
      </div>
      <div className="dataCard humid center-item bg-humid">
        <div className="center-item font-size">
          80 <WiHumidity />
        </div>
      </div>
      <div className="dataCard light center-item bg-light">
        <div className="center-item font-size">
          60% <CiLight />
        </div>
      </div>
      <div className="dataCard chart ">
        <Line
          height="38"
          width="100"
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
              {
                label: "Price",
                data: revenueData.map((data) => data.price),
                backgroundColor: "#fcfc03",
                borderColor: "#fcfc03",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
      <div className="dataCard fan font-size-fan center-item ">
        <div className="center-item font-size-fan color-fan gap ">
          <PiFanFill className={active ? "active " : ""} />
          <Switch onClick={onclick} />
        </div>
      </div>
      <div className="dataCard lamp font-size-fan center-item ">
        <div className="center-item font-size-fan color-fan gap ">
          <FaLightbulb className={light ? "light " : ""} />
          <Switch onClick={handleLamp} />
        </div>
      </div>
    </div>
  );
}

export default App;
