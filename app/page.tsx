import Header from "./components/Header";
import SavingsCard from "./components/SavingsCard";
import MostCookedMeals from "./components/MostCookedMeals";
import WeeklySavings from "./components/WeeklySavings";
import DinnerDistribution from "./components/DinnerDistribution";
import MealCosts from "./components/MealCosts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <main className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-100 border border-gray-100/80 overflow-hidden">
        {/* Header with decorative shapes */}
        <Header />

        <div className="p-6 md:p-8 space-y-8">
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
