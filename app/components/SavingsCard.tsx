"use client";

export default function SavingsCard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4">
      {/* Main Savings Highlight Card (Left side) */}
      <div className="flex-1 rounded-2xl border border-gray-200 p-5 bg-white flex flex-col justify-between hover:shadow-sm transition-all duration-300">
        <div>
          <p className="text-xs text-gray-500 font-medium">Saved this month</p>
          <p className="text-[44px] font-black leading-tight text-gray-800 mt-1">$890</p>
        </div>
        <div className="mt-4">
          <span className="inline-block rounded-full bg-[#E07055] px-3.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
            + $37 VS LAST MONTH
          </span>
        </div>
      </div>

      {/* Right Side Stats (2x2 Grid) */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {/* Cooked Dinners */}
        <div className="rounded-2xl border border-gray-200 p-4 text-center bg-white flex flex-col justify-center hover:shadow-sm transition-all duration-300">
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider leading-tight">
            Cooked Dinners
          </p>
          <p className="text-2xl font-extrabold text-[#3A7D6C] leading-none mt-2">
            17
          </p>
        </div>

        {/* Restaurant Dinners */}
        <div className="rounded-2xl border border-gray-200 p-4 text-center bg-white flex flex-col justify-center hover:shadow-sm transition-all duration-300">
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider leading-tight">
            Restaurant Dinners
          </p>
          <p className="text-2xl font-extrabold text-[#3A7D6C] leading-none mt-2">
            9
          </p>
        </div>

        {/* Longest Streak */}
        <div className="rounded-2xl border border-gray-200 p-4 text-center bg-white flex flex-col justify-center hover:shadow-sm transition-all duration-300">
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider leading-tight">
            Longest Streak
          </p>
          <p className="text-xl font-extrabold text-[#3A7D6C] leading-none mt-2">
            4 days
          </p>
        </div>

        {/* Most Active Day */}
        <div className="rounded-2xl border border-gray-200 p-4 text-center bg-white flex flex-col justify-center hover:shadow-sm transition-all duration-300">
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider leading-tight">
            Most Active Day
          </p>
          <p className="text-lg font-extrabold text-[#3A7D6C] leading-none mt-2">
            Monday
          </p>
        </div>
      </div>
    </div>
  );
}
