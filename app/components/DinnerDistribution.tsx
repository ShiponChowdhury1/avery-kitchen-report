"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barData = [
  { name: "Week 1", Home: 4, Restaurant: 2 },
  { name: "Week 2", Home: 3, Restaurant: 3 },
  { name: "Week 3", Home: 6, Restaurant: 1 },
  { name: "Week 4", Home: 4, Restaurant: 3 },
];

const pieData = [
  { name: "Home-Cooked", value: 72.7, color: "#3A7D6C" },
  { name: "Restaurant", value: 27.3, color: "#E07055" },
];

export default function DinnerDistribution() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[130px] flex items-center justify-center text-gray-400">
        Loading charts...
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
      <h3 className="text-sm font-bold text-gray-800 mb-4">Dinner Distribution</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center flex-1">
        {/* Bar Chart (takes 3/5 width on large screens) */}
        <div className="md:col-span-3 h-[130px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
              barGap={3}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: '#6b7280', fontSize: 10 }} 
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: '#6b7280', fontSize: 10 }} 
                domain={[0, 7]}
                ticks={[0, 2, 4, 6]}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '10px', padding: '4px 8px' }}
                cursor={{ fill: '#f9fafb' }}
              />
              <Bar dataKey="Home" fill="#3A7D6C" radius={[3, 3, 0, 0]} barSize={12} />
              <Bar dataKey="Restaurant" fill="#E07055" radius={[3, 3, 0, 0]} barSize={12} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart (takes 2/5 width on large screens) */}
        <div className="md:col-span-2 flex flex-col items-center justify-center">
          <div className="h-[90px] w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={40}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center Text */}
            <div className="absolute text-center">
              <span className="text-[8px] text-gray-400 font-medium block leading-none">Total</span>
              <span className="text-sm font-extrabold text-gray-800 leading-none mt-0.5 inline-block">26</span>
            </div>
          </div>

          {/* Custom Legend */}
          <div className="flex gap-3 mt-1.5 justify-center">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] font-semibold text-gray-600">
                  {item.name}: <span className="text-gray-900">{item.value}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
