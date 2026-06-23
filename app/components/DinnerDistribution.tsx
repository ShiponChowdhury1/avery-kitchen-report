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
  Legend,
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
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        Loading charts...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Dinner Distribution</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center flex-1">
        {/* Bar Chart (takes 3/5 width on large screens) */}
        <div className="lg:col-span-3 h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: '#6b7280', fontSize: 12 }} 
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: '#6b7280', fontSize: 12 }} 
                domain={[0, 7]}
                ticks={[0, 2, 4, 6]}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                cursor={{ fill: '#f9fafb' }}
              />
              <Bar dataKey="Home" fill="#3A7D6C" radius={[4, 4, 0, 0]} barSize={16} />
              <Bar dataKey="Restaurant" fill="#E07055" radius={[4, 4, 0, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart (takes 2/5 width on large screens) */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <div className="h-[180px] w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
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
              <span className="text-xs text-gray-400 font-medium block">Total Meals</span>
              <span className="text-2xl font-extrabold text-gray-800">26</span>
            </div>
          </div>

          {/* Custom Legend */}
          <div className="flex gap-4 mt-2 justify-center">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs font-semibold text-gray-700">
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
