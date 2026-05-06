import {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./FullRecipe.css";

function FullRecipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data.meals[0]));
    }, [id]);

    if (!recipe) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className="full-recipe">
            <div className="layout">

                <div className="img-cont">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>

                <div className="info-cont">
                    <h1>{recipe.strMeal}</h1>
                    <p><strong>Category:</strong> {recipe.strCategory}</p>
                    <p><strong>Area:</strong> {recipe.strArea}</p>
                    <h2>Instructions</h2>
                    <p>{recipe.strInstructions}</p>
                </div>
            </div>
        </div>
    )
} 

export default FullRecipe