function Receipes() {
  const recipes = [
    {
      id: 1,
      title: "Classic Chocolate Cake",
      emoji: "🍰",
      description:
        "Rich and moist chocolate cake perfect for any occasion",
      category: "desserts",
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      emoji: "🍝",
      description:
        "Traditional Italian pasta with creamy egg sauce",
      category: "dinner",
    },
  ];

  return (
    <div >
      <h1 className=" text-lg bg-amber-400">Recipes</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id} className="grid grid-cols-1 text-2xl gap-6">
          <h2>
            {recipe.emoji} {recipe.title}
          </h2>

          <p>{recipe.description}</p>

          <p>🍽️ {recipe.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Receipes;