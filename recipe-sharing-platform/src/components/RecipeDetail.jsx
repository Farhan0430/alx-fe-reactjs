import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json"; // your recipe data file

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500 mt-10">Recipe not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Ingredients Section */}
      <section className="mb-8 bg-green-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-lg">{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
