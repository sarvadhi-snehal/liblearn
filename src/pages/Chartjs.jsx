import React from "react";
import { Bar,Line, Radar, Doughnut, Pie, PolarArea ,Bubble,Scatter} from "react-chartjs-2";
import './Chartjs.scss'
const data = {
  labels: ["1", "2", "3", "4", "5", "6","7"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5, 2, 3,5],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4,6],
      backgroundColor: "rgb(54, 162, 135)",
    },
    {
      label: "# of Green Votes",
      data: [3, 10, 13, 15, 22, 30,50],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
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
