import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setRecipes(data);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">{recipe.name}</h2>
        </Link>
      ))}
    </div>
  );
}
