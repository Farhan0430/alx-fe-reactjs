import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Please enter ingredients.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Include at least two ingredients.";
    if (!steps.trim()) newErrors.steps = "Please enter preparation steps.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        steps,
      });
      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            placeholder="Enter ingredients separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            placeholder="Enter preparation steps"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
