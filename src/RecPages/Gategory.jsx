function Gategory() {
  const categories = [
    {
      id: "breakfast",
      name: "Breakfast",
      emoji: "🍳",
      description: "Start your day right",
    },
    {
      id: "lunch",
      name: "Lunch",
      emoji: "🍔",
      description: "Midday favorites",
    },
    {
      id: "dinner",
      name: "Dinner",
      emoji: "🍝",
      description: "Evening meals",
    },
    {
      id: "desserts",
      name: "Desserts",
      emoji: "🍰",
      description: "Sweet treats",
    },
  ];

  return (
    <div>
       <h1 className=" text-lg bg-amber-400">Gategory</h1>
      {categories.map((category) => (
        <div key={category.id} className="grid grid-cols-1 gap-2">
          <h2>
            {category.emoji} {category.name}
          </h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Gategory;