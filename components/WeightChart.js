'use client'

import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function WeightChart() {
    const series = [
        {
            name: 'Gewicht',
            data: [80, 75, 68, 62, 56, 54, 50],
            labels: {
                style: {
                    fontSize: "0px"
                }
            }
        }
    ];

    const options = {
        chart: {
            type: 'area',
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: '#888',
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            strokeDashArray: 4,
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: false } }
        },
        xaxis: {
            categories: [1, 2, 4, 6, 8, 10,],
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

            categories: [50, 60, 7, 70, 80],
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
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const value = series[seriesIndex][dataPointIndex];
                return `
        <div style="
                  width: 8rem;
                  height: 8rem;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  color: black;
                  font-weight: bold;
                  font-size: 0.875rem;
                  text-align: center;
                ">
                  <div style="
                    background-color: #a3e635;
                    width: 6rem;
                    height: 6rem;
                    border-radius: 9999px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  ">
                    Ziel<br>${value} kg
                  </div>
                </div>

          `;
            }
        }

    };


    return (
        <div className="bg-[#f5f8f8] p-4 rounded-[40px] w-2/3 h-2/3 flex justify-center items-center mx-auto relative shadow-sm">
            <Chart options={options} series={series} type="area" height={"90%"} className="w-full" />


            <div style={{borderColor:""}} className="absolute right-4 bottom-[3.5rem] bg-blue-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                Woche
            </div>
        </div>
    );
}
