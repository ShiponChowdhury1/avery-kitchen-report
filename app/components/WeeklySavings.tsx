"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Week 1", Savings: 367 },
  { name: "Week 2", Savings: 110 },
  { name: "Week 3", Savings: 180 },
  { name: "Week 4", Savings: 233 },
];

export default function WeeklySavings() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[250px] flex items-center justify-center text-gray-400">
        Loading charts...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">Weekly Savings</h3>
        <p className="text-xs text-gray-400 mb-6">Savings breakdown per week this month</p>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 0, right: 20, left: -10, bottom: 0 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#4b5563", fontSize: 12, fontWeight: 500 }}
            />
            <Tooltip
              formatter={(value) => [`$${value}`, "Savings"]}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />
            <Bar dataKey="Savings" fill="#3A7D6C" radius={[0, 6, 6, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#3A7D6C" : index % 2 === 0 ? "#7F9D96" : "#4b8f7e"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
