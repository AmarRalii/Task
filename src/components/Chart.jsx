import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = ({ transactions }) => {
  const data = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: 'Transaction Amount',
        data: transactions.map(t => t.amount),
        borderColor: '#0F111E',
        backgroundColor: 'rgba(0,0,0,1)',
        
      },
    ],
  };

  return <Line data={data}  />;
};

export default Chart;
