import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log({ title, ingredients, steps });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 md:p-8 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 md:p-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 md:p-3"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 md:p-3"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 md:px-6 rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
