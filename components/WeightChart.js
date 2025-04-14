'use client'

import React from 'react';
import Chart from 'react-apexcharts';

export default function WeightChart() {
  const series = [
    {
      name: 'Gewicht',
      data: [80, 75, 68, 62, 56, 54,50],
      labels:{style:{
        fontSize:"0px"
      }}
    }
  ];

  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: '#888',
    },
    dataLabels:{
        enabled:false
    }, 
    grid: {
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } }
    },
    xaxis: {
      categories: [1, 2, 4, 6, 8, 10 ,],
      labels: {
        style: {
          fontSize: '16px',
          fontWeight: 600
        }
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {

      categories:[50,60,7,70,80],
      tickAmount: 4,
      labels: {
        style: {
          fontSize: '16px',
          fontWeight: 600
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 5,
      colors: ['#4ea5f7']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [0, 100]
      },
      colors: ['#4ea5f7']
    },
    // markers: {
    //   size: [6, 6, 6, 6, 6, 10],
    //   strokeWidth: [3, 3, 3, 3, 3, 4],
    //   strokeColors: ['#4ea5f7'],
    //   colors: ['#fff'],
    //   hover: {
    //     sizeOffset: 2
    //   }
    // },
    tooltip: {
      enabled: true,
      theme: 'light',
      y: {
        formatter: (val) => `${val} kg`
      }
    }
  };

  return (
    <div className="bg-[#f5f8f8] p-4 rounded-[40px] w-2/3 h-2/3 flex justify-center items-center mx-auto relative shadow-sm">
      <Chart options={options} series={series} type="area" height={"90%"} className="w-full"  />

      <div className="absolute right-[200px] bottom-[170px] w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-sm text-center leading-tight z-10">
        Ziel<br />54kg
      </div>

      <div className="absolute right-[227px] bottom-[150px] w-6 h-6 bg-white border-4 border-blue-400 rounded-full z-20"></div>

      <div className="absolute top-3 left-5 bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
        kg
      </div>

      <div className="absolute right-4 bottom-[3.5rem] bg-blue-500 text-white px-4 py-1 rounded-full font-bold text-sm">
        Woche
      </div>
    </div>
  );
}
