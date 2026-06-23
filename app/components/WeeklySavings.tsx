"use client";

const weeks = [
  { label: "Week 1", amount: 367, max: 367 },
  { label: "Week 2", amount: 110, max: 367 },
  { label: "Week 3", amount: 180, max: 367 },
  { label: "Week 4", amount: 233, max: 367 },
];

export default function WeeklySavings() {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-0.5">Weekly Savings</h3>
        <p className="text-[10px] text-gray-400 mb-4">Savings breakdown per week this month</p>
      </div>

      <div className="space-y-[10px] flex-1 flex flex-col justify-center">
        {weeks.map((week) => (
          <div key={week.label} className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 w-[44px] flex-shrink-0 font-medium">
              {week.label}
            </span>
            <div className="flex-1 h-[14px] rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(week.amount / week.max) * 100}%`,
                  backgroundColor: "#3A7D6C",
                }}
              />
            </div>
            <span className="text-[11px] font-bold text-gray-700 w-[36px] text-right">
              ${week.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
