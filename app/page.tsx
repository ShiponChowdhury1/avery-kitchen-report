"use client";

import { Printer } from "lucide-react";
import Header from "./components/Header";
import SavingsCard from "./components/SavingsCard";
import MostCookedMeals from "./components/MostCookedMeals";
import WeeklySavings from "./components/WeeklySavings";
import DinnerDistribution from "./components/DinnerDistribution";
import MealCosts from "./components/MealCosts";
import Footer from "./components/Footer";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 print:py-0 print:px-0 flex flex-col justify-between relative">
      {/* Print PDF Action Trigger Button */}
      <div className="max-w-5xl w-full mx-auto mb-4 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-[#3A7D6C] hover:bg-[#2a5b4f] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#3A7D6C]/10 transition-all cursor-pointer border-none outline-none hover:scale-[1.02] active:scale-[0.98]"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      <main className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-100 border border-gray-100/80 overflow-hidden">
        {/* Header with decorative shapes */}
        <Header />

        <div className="p-6 md:p-8 print:p-5 space-y-6 print:space-y-4">
          {/* Key Metrics / Savings Cards */}
          <section>
            <SavingsCard />
          </section>

          {/* Grid row for meals & savings */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MostCookedMeals />
            <WeeklySavings />
          </section>

          {/* Dinner distribution charts */}
          <section>
            <DinnerDistribution />
          </section>

          {/* Meal costs comparison and actual budget spend card */}
          <section>
            <MealCosts />
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
