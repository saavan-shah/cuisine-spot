import {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./FullRecipe.css";

function FullRecipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const [completed, setCompleted] = useState(new Set());

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data.meals[0]));
    }, [id]);

    if (!recipe) {
        return <h2>Loading...</h2>;
    }

    const ingredients = sortIngredients(recipe);

    const instructions = recipe.strInstructions?.split('.').filter(step => step.trim().length > 5);


    const toggleStep = (index) => {
        const newCompleted = new Set(completed);
        if (newCompleted.has(index)) {
            newCompleted.delete(index);
        } else {
            newCompleted.add(index);
        }
        setCompleted(newCompleted);
    }

    return (
        <div className="full-recipe">
            <Link to="/" className="back-link">← Back to Cuisines</Link>
            <div className="layout">

                <div className="img-cont">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>

                <div className="info-cont">
                    <h1>{recipe.strMeal}</h1>
                    <p><strong>Main Protein:</strong> {recipe.strCategory}</p>
                    <p><strong>Cuisine:</strong> {recipe.strArea}</p>
                    <ul>
                        {ingredients.map(ing => (
                            <li key={ing.id}>
                                <strong>{ing.name}</strong>
                                <span className="measure">{ing.amount}</span>
                            </li>
                        ))}
                    </ul>
                    <h2>Instructions</h2>
                    <div className="tip">
                        <p>Click on each step to mark it as completed!</p>
                    </div>
                    <div className="instructions">
                        {instructions.map((step, index) => (
                            <div key={index} className={`i-step ${completed.has(index) ? 'completed' : ''}`} onClick={() => toggleStep(index)}>
                                {step.trim()}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 
function sortIngredients(recipe) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push({
                id: i,
                name: ingredient,
                amount: measure || 'To taste'
            });
        }
    }
    return ingredients;
}

export default FullRecipe