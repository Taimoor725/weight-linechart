'use client'

import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, Legend
} from 'recharts';

const data = [
  { week: 1, weight: 80 },
  { week: 2, weight: 75 },
  { week: 4, weight: 68 },
  { week: 6, weight: 62 },
  { week: 8, weight: 56 },
  { week: 10, weight: 54 },
  { week: 12, weight: 50 }
];

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
            tick={{ fontSize: 16, fontWeight: 600 }}
            tickLine={false}
            axisLine={false}
            label={{ value: 'Woche', position: 'insideRight', offset: -20 }}
          />
          <YAxis
            tick={{ fontSize: 16, fontWeight: 600 }}
            tickCount={4}
            domain={[50,60,70,80]}
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

      <div className="absolute top-3 left-5 bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
        kg
      </div>
      <div className="absolute right-4 bottom-[3.5rem] bg-blue-500 text-white px-4 py-1 rounded-full font-bold text-sm">
        Woche
      </div>
    </div>
  );
}
