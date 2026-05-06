import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./MainPage.css";

const CUISINES = ['Japan', 'Italy', 'Mexico', 'China', 'India'];

export default function MainPage() {
    const [cuisine, setCuisine] = useState(CUISINES[0]);
    
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [cuisine]);
    
    return (
        <section className="bigwrap">
            <nav>
                <section className="nav-brand">
                    <a href="#headpage">The Cuisine Spot</a>
                </section>
                <section className="nav-links">
                    <a href="#about">About</a>
                    <a href="#main-chooser">Get Started</a>
                    <a href="#footpage">Follow</a>
                </section>
            </nav>

            <header id="headpage">
                <h1>A World of Flavors at Your Fingertips</h1>
                <p>Take an international look through the cuisines of the world, and find easy-to-make recipes in a few clicks!</p>
                <a href="#main-chooser">Get Started</a>
            </header>

            <section id="about">
                <section className="about-text">
                    <h2>More than just a recipe.</h2>
                    <p>Home cooking can be an avenue for adventure. Experience an international assortment of world flavors right from your kitchen, with all your loved ones in on the journey! From the countryside of Italy to the metropolitan hubs of Japan, travel across the Earth with this online cookbook compendium. Ranging from five different cuisines, this compendium offers recipes of all types of dietary options, so everyone can enjoy. Please enjoy this cookbook and its recipes, and find your international flavor!</p>
                </section>
                <section className="about-image">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" alt="Chef cooking" className="philosophy-image" />
                </section>
            </section>

            <section id="main-chooser">
                <section className="chooser-head">
                    <h2>Find your next meal in a few clicks.</h2>
                    <p>Choose a country, and we'll show you the most popular dishes from that country, along with easy-to-make recipes for each dish.</p>
                </section>

                <section className="button-board">
                    {/* <button className="country-button active" type="button">Italy</button>
                    <button className="country-button" type="button">Japan</button>
                    <button className="country-button" type="button">India</button>
                    <button className="country-button" type="button">Mexico</button>
                    <button className="country-button" type="button">China</button> */}
                    {CUISINES.map((c) => {
                        if (c === cuisine) {
                            return <button key={c} className="country-button active" type="button" onClick={() => setCuisine(c)}>{c}</button>;
                        } else {
                            return <button key={c} className="country-button" type="button" onClick={() => setCuisine(c)}>{c}</button>;
                        }
                    })}
                </section>

                <section className="all-cards">
                    {/* <section className="card-wrapp">
                    <section className="dish-card">
                        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dish image" />
                        <h3 className="dish-title">Margherita Pizza</h3>
                    </section>
                    </section> */}
                    {meals?.map((meal) => (
                        <section key={meal.idMeal} className="card-wrapp">
                            <section className="dish-card">
                                <Link to={`/recipe/${meal.idMeal}`} className="card-link">
                                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                                    <h3 className="dish-title">{meal.strMeal}</h3>
                                </Link>
                            </section>
                        </section>
                    ))}

                </section>

            </section>

            <footer id="footpage">
                <p>Created by Saavan Shah, CSE 2004, Spring 2026</p>
            </footer>
        </section>
    );
}