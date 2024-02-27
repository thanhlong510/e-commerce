
import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false
    },
    
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  
};



const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export const data = {
  labels,
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0, 100,0,0,0, 0, 0],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

const Test = () => {
 
  return (
    <>
    <div>
    <Bar  options={options} data={data} />
    </div>
      
    </>
  );
};

export default Test;
