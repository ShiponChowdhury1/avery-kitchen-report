"use client";

import { ShoppingBag, Utensils, ReceiptText } from "lucide-react";

export default function MealCosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left - meal costs */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-800 mb-0.5">
            Your updated meal costs
          </h3>
          <p className="text-[10px] text-gray-400 mb-6">(per person)</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 font-medium">Home-cooked average:</span>
            <span className="w-10 h-10 rounded-full bg-[#3A7D6C] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              $11
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 font-medium">Restaurant average:</span>
            <span className="w-10 h-10 rounded-full bg-[#3A7D6C] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              $38
            </span>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-gray-100 text-center text-[10px] text-gray-400 font-medium">
          Home-cooked average costs include grocery groceries
        </div>
      </div>

      {/* Right - actual food spend card */}
      <div className="bg-[#3A7D6C] rounded-2xl p-4 text-white shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div>
          <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-80 mb-3 text-center">
            ACTUAL FOOD SPEND
          </h4>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center bg-white/10 rounded-xl p-2.5">
              <div className="flex items-center justify-center gap-1.5 opacity-90 mb-1">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold">Groceries</span>
              </div>
              <p className="text-lg font-extrabold">$360.74</p>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-2.5">
              <div className="flex items-center justify-center gap-1.5 opacity-90 mb-1">
                <Utensils className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold">Restaurants</span>
              </div>
              <p className="text-lg font-extrabold">$540.90</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-3 flex flex-col items-center">
          <p className="text-[10px] opacity-75 leading-none">Total food expenses:</p>
          <p className="text-2xl font-black text-white mt-1">$901.64</p>
        </div>
      </div>
    </div>
  );
}
