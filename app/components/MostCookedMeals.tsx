export default function MostCookedMeals() {
  const meals = [
    { name: "Spaghetti and meatballs", count: 5, color: "#3A7D6C", percentage: 100 },
    { name: "Chicken tacos", count: 4, color: "#E07055", percentage: 80 },
    { name: "Salmon and asparagus", count: 3, color: "#7F9D96", percentage: 60 },
    { name: "Burgers and sweet potatoes", count: 2, color: "#d4a373", percentage: 40 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">Most Cooked Meals</h3>
        <p className="text-xs text-gray-400 mb-6">Top prepared meals by frequency</p>
      </div>

      <div className="space-y-4 flex-1 flex flex-col justify-center">
        {meals.map((meal) => (
          <div key={meal.name} className="group">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
                  style={{ backgroundColor: meal.color }}
                />
                <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {meal.name}
                </span>
              </div>
              <span className="text-xs font-extrabold text-gray-800 bg-gray-50 px-2 py-0.5 rounded">
                {meal.count}x
              </span>
            </div>
            
            {/* Visual scale progress bar */}
            <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${meal.percentage}%`,
                  backgroundColor: meal.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
