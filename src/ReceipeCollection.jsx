
import { useState } from "react";

const ReceipeCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "breakfast", "lunch", "dinner", "dessert"];

  const recipes = [
    {
      id: 1,
      name: "🍝 Pasta Carbonara",
      ingredients: ["pasta", "eggs", "cheese", "bacon"],
      time: 20,
      diffculty: "easy",
    },
    {
      id: 2,
      name: "🥞 Pancakes",
      ingredients: ["flour", "milk", "eggs", "sugar"],
      time: 15,
      diffculty: "easy",
    },
    {
      id: 3,
      name: "🍕 Margherita Pizza",
      ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
      time: 30,
      diffculty: "medium",
    },
    {
      id: 4,
      name: "🥗 Caesar Salad",
      ingredients: ["lettuce", "chicken", "parmesan", "croutons"],
      time: 15,
      diffculty: "hard",
    },
  ];

  const getDiffculty = (diffculty) => {
    switch (diffculty) {
      case "easy":
        return "text-green-600 bg-green-100";

      case "medium":
        return "text-yellow-600 bg-yellow-100";

      case "hard":
        return "text-red-600 bg-red-100";

      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-rose-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* header */}
        <div className="text-center">
          <h1 className="mb-12 text-3xl font-bold text-gray-800">
            My Receipe Collection
          </h1>

          <p className="text-gray-600">
            Find your Favorite receipe and start cooking
          </p>
        </div>

        {/* categories */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize cursor-pointer ${
                selectedCategory === category
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-600 hover:bg-orange-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* receipes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* receipe header */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {recipe.name}
                  </h1>

                  <span>{recipe.image}</span>
                </div>

                {/* receipe details */}
                <div className="flex gap-4 mb-4">
                  <span className="text-gray-500 text-sm flex items-center">
                    ⏱️ {recipe.time} min
                  </span>

                  <span
                    className={`text-sm px-2 py-1 rounded-full ${getDiffculty(
                      recipe.diffculty
                    )}`}
                  >
                    {recipe.diffculty}
                  </span>
                </div>

                {/* ingredients */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-4">
                    Ingredients:
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-2 py-2 bg-gray-100 rounded-full text-gray-600 text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReceipeCollection;
