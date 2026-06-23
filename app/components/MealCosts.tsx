"use client";

import { ShoppingBag, Utensils, ReceiptText, ArrowDown } from "lucide-react";

export default function MealCosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left - meal costs */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            Your updated meal costs
          </h3>
          <p className="text-xs text-gray-400 mb-6">(per person average comparison)</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3.5 bg-[#3A7D6C]/5 rounded-xl border border-[#3A7D6C]/10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#3A7D6C]/10 flex items-center justify-center text-[#3A7D6C] text-sm">
                🍳
              </span>
              <div>
                <p className="text-xs font-semibold text-gray-700">Home-cooked average</p>
                <p className="text-[10px] text-gray-400">Save money, eat healthy</p>
              </div>
            </div>
            <span className="text-2xl font-black text-[#3A7D6C]">
              $11
            </span>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-[#E07055]/5 rounded-xl border border-[#E07055]/10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#E07055]/10 flex items-center justify-center text-[#E07055] text-sm">
                🍷
              </span>
              <div>
                <p className="text-xs font-semibold text-gray-700">Restaurant average</p>
                <p className="text-[10px] text-gray-400">Dining out & experience</p>
              </div>
            </div>
            <span className="text-2xl font-black text-[#E07055]">
              $38
            </span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-xl text-center text-xs text-gray-500 font-medium flex items-center justify-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-[#3A7D6C]" />
          <span>Home-cooked meals save you <span className="font-bold text-[#3A7D6C]">$27</span> per serving!</span>
        </div>
      </div>

      {/* Right - actual food spend card */}
      <div className="bg-gradient-to-br from-[#3A7D6C] to-[#2a5b4f] rounded-2xl p-6 text-white shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
        
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase opacity-75 mb-4">
            Actual Food Spend
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-3.5">
              <div className="flex items-center gap-1.5 opacity-80 mb-1">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Groceries</span>
              </div>
              <p className="text-xl font-bold">$360.74</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3.5">
              <div className="flex items-center gap-1.5 opacity-80 mb-1">
                <Utensils className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Restaurants</span>
              </div>
              <p className="text-xl font-bold">$540.90</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/20 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <ReceiptText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] opacity-75 leading-none">Total food expenses</p>
              <p className="text-[10px] opacity-50 mt-1">Combine budget</p>
            </div>
          </div>
          <p className="text-3xl font-black text-white">$901.64</p>
        </div>
      </div>
    </div>
  );
}
