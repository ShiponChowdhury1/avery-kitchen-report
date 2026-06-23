"use client";

import { TrendingUp, ChefHat, UtensilsCrossed, Flame, CalendarRange } from "lucide-react";

export default function SavingsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-6">
      {/* Main Savings Highlight Card */}
      <div className="md:col-span-3 lg:col-span-2 bg-[#3A7D6C]/5 border border-[#3A7D6C]/20 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300">
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-28 h-28 bg-[#3A7D6C]/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
        
        <div>
          <span className="text-xs font-bold text-[#3A7D6C] uppercase tracking-wider bg-[#3A7D6C]/10 px-2.5 py-1 rounded-md">
            Savings Summary
          </span>
          <h4 className="text-sm font-medium text-gray-500 mt-4">Saved this month</h4>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-5xl font-black text-gray-800 tracking-tight">$890</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#E07055] bg-[#E07055]/10 w-fit px-3 py-1.5 rounded-full">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+ $37 VS LAST MONTH</span>
        </div>
      </div>

      {/* Small Stat Card 1: Cooked Dinners */}
      <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-[#3A7D6C]/10 flex items-center justify-center text-[#3A7D6C] mb-4">
          <ChefHat className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400">Cooked Dinners</p>
          <p className="text-3xl font-extrabold text-gray-800 mt-1">17</p>
        </div>
        <div className="text-[10px] text-gray-400 mt-4">Healthy & homemade</div>
      </div>

      {/* Small Stat Card 2: Restaurant Dinners */}
      <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-[#E07055]/10 flex items-center justify-center text-[#E07055] mb-4">
          <UtensilsCrossed className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400">Restaurant Dinners</p>
          <p className="text-3xl font-extrabold text-gray-800 mt-1">9</p>
        </div>
        <div className="text-[10px] text-gray-400 mt-4">Social & takeout</div>
      </div>

      {/* Small Stat Card 3: Longest Streak */}
      <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
          <Flame className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400">Longest Streak</p>
          <p className="text-3xl font-extrabold text-gray-800 mt-1">4 days</p>
        </div>
        <div className="text-[10px] text-gray-400 mt-4">Consecutive home dinners</div>
      </div>

      {/* Small Stat Card 4: Most Active Day */}
      <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-[#7F9D96]/10 flex items-center justify-center text-[#7F9D96] mb-4">
          <CalendarRange className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400">Most Active Day</p>
          <p className="text-2xl font-extrabold text-gray-800 mt-2">Monday</p>
        </div>
        <div className="text-[10px] text-gray-400 mt-4">Peak home cooking day</div>
      </div>
    </div>
  );
}
