'use client'

import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const InitialWeight = 80;
const TargetLoss = 5;
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

export default function WeightChart() {
    const targetWeight = InitialWeight - TargetLoss;

    return (
        <div className="bg-[#f5f8f8] lg:p-4 lg:rounded-[40px] rounded-2xl w-full lg:w-2/3 h-1/2 lg:h-2/3 flex justify-center items-center lg:mx-auto relative shadow-sm overflow-hidden">
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4ea5f7" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#4ea5f7" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 0" vertical={false} />
                    <XAxis
                        dataKey="week"
                        domain={[0, 10]}
                        ticks={[0, 2, 4, 6, 8, 10]}
                        type="number"
                        tick={{ fontSize: '1.4rem', fontWeight: 600 }}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: '', position: 'insideRight', offset: -20 }}
                    />
                    <YAxis
                        tick={{ fontSize: '1.3rem', fontWeight: 600 }}
                        domain={[targetWeight, InitialWeight]}
                        interval={0}
                        ticks={Array.from({ length: TargetLoss + 1 }, (_, i) => InitialWeight - i)}
                        label={{ value: 'kg', angle: -90, position: 'insideLeft', offset: 10 }}
                    />

                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="weight"
                        stroke="#4ea5f7"
                        strokeWidth={3}
                        fill="url(#weightGradient)"
                        dot={false}
                        activeDot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div className="absolute top-1 left-6 lg:top-7 lg:left-10 bg-blue-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full font-bold text-xs md:text-sm">
                kg
            </div>

            <div className="absolute lg:bottom-[2.2rem] right-0.5 bottom-[1.2rem] bg-blue-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full font-bold text-[10px] lg:text-lg">
                Woche
            </div>

            <div className='absolute right-[1rem] bottom-[5rem] lg:right-[12.5rem] lg:bottom-[9.5rem] z-10 flex flex-col gap-0 justify-center items-center'>
                <div style={{
                    width: '6rem',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '0.7rem',
                    textAlign: 'center',
                }}>
                    <div className='lg:w-[6rem] lg:h-[6rem] w-[4rem] h-[4rem]' style={{
                        backgroundColor: '#9FFB04',
                        color: 'black',
                        borderRadius: '9999px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span className='text-xs md:text-xl font-normal'>Ziel<br/><span className='text-sm md:text-2xl font-semibold'> {targetWeight} kg</span></span>
                    </div>
                </div>
                <div className='w-4 h-4 md:w-5 md:h-5 border-[1px] bg-white border-gray-400 shadow-xl rounded-full'></div>
            </div>
        </div>
    );
}