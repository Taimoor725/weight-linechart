'use client'

import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const InitialWeight = 80;
const TargetLoss =5
const FinalWeight = InitialWeight - 5;
const TotalWeeks = 10;

const generateEvenWeekData = () => {
    const weightDropPerWeek = (InitialWeight - FinalWeight) / TotalWeeks;
    return Array.from({ length: 7 }, (_, i) => {
        const week = i * 2; // 0, 2, 4, 6, 8, 10
        const weight = parseFloat((InitialWeight - weightDropPerWeek * week).toFixed(1));
        return { week, weight };
    });
};

const data = generateEvenWeekData();


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const value = payload[0].value;
        return (
            <div style={{
                width: '8rem',
                height: '8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '0.875rem',
                textAlign: 'center',
            }}>
                <div style={{
                    backgroundColor: '#a3e635',
                    width: '6rem',
                    height: '6rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Ziel<br />{value} kg
                </div>
            </div>
        );
    }

    return null;
};

export default function WeightChart() {
    const targetWeight = InitialWeight - TargetLoss;

    return (
        <div className="bg-[#f5f8f8] p-4 rounded-[40px] w-2/3 h-2/3 flex justify-center items-center mx-auto relative shadow-sm">
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4ea5f7" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#4ea5f7" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4" vertical={false} />
                    <XAxis
                        dataKey="week"
                        domain={[0, 10]} // ensures full 0–10 range
                        ticks={[0, 2, 4, 6, 8, 10]}
                        type="number"
                        tick={{ fontSize: 16, fontWeight: 600 }}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: '', position: 'insideRight', offset: -20 }}
                    />

                    <YAxis
                        tick={{ fontSize: 16, fontWeight: 600 }}
                        domain={[targetWeight, InitialWeight]}
                        interval={0}
                        ticks={Array.from({ length: TargetLoss + 1 }, (_, i) => InitialWeight - i)}
                        label={{ value: 'kg', angle: -90, position: 'insideLeft', offset: 10 }}
                    />

                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="weight"
                        stroke="#4ea5f7"
                        strokeWidth={5}
                        fill="url(#weightGradient)"
                        dot={false}
                        activeDot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>

            {/* kg bubble */}
            <div className="absolute top-3 left-5 bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                kg
            </div>

            {/* Woche bubble */}
            <div className="absolute right-3 bottom-[3rem] bg-blue-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                Woche
            </div>

            <div className='absolute right-[11.5rem] bottom-[10rem] flex flex-col gap-0 justify-center items-center'>
                <div style={{
                    width: '8rem',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                }}>
                    <div style={{
                        backgroundColor:'#C9CBCB',
                        width: '7rem',
                        height: '7rem',
                        color:'black',
                        borderRadius: '9999px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* <div className=''>Final Goal</div> */}
                        <span className='text-xl font-normal'>Ziel<br/> {targetWeight} kg</span>
                    </div>
                </div>
                <div className='w-5 h-5 border-[4px] border-black  rounded-full'></div>
            </div>
        </div>
    );
}
