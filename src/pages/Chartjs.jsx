import React from "react";
import { Bar,Line, Radar, Doughnut, Pie, PolarArea ,Bubble,Scatter} from "react-chartjs-2";
import './Chartjs.scss'
const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      label: "No",
      data: [12, 19, 3, 5,],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Yet to Decide",
      data: [2, 3, 20, 5],
      backgroundColor: "rgb(54, 162, 135)",
    },
    {
      label: "Yes",
      data: [3, 10, 13, 15],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
  animations: {
    tension: {
      duration: 500,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};
function Chartjs() {
  return (
    <div className="chartContainer">
      <div className="header">
        <h1 className="title">Stacked Bar Chart</h1>
      <Bar className="chartBar" data={data} options={options} responsive="true" />
      </div>
      <div className="header">
        <h1 className="title">Line Chart</h1>
        <Line className="chartBar" data={data} options={options} responsive="true" /> 
      </div>
      <div className="header">
        <h1 className="title">Radar Chart</h1>
        <Radar className="chartBar" data={data} options={options} responsive="true" />
      </div>

      <div className="header">
        <h1 className="title">Doughnut Chart</h1>
        <Doughnut className="chartBar" data={data} options={options} responsive="true" />
      </div>

      <div className="header">
        <h1 className="title">Pie Chart</h1>
        <Pie className="chartBar" data={data} options={options} responsive="true" />
      </div>
      <div className="header">
        <h1 className="title">Polar Area Chart</h1>
        <PolarArea className="chartBar" data={data} options={options} responsive="true" />
      </div>


      <div className="header">
        <h1 className="title">Bubble  Chart</h1>
        <Bubble className="chartBar" data={data} options={options} responsive="true" />
      </div>

      <div className="header">
        <h1 className="title">Scatter Chart</h1>
        <Scatter className="chartBar" data={data} options={options} responsive="true" />
      </div>
      
    </div>

    
  );
}

export default Chartjs;
