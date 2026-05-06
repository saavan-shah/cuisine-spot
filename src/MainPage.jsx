import "./MainPage.css";

export default function MainPage() {
    return (
        <section className="bigwrap">
            <nav>
                <section className="nav-brand">The Cuisine Spot</section>
                <section className="nav-links">
                    <a href="#about">About</a>
                    <a href="#main-chooser">Get Started</a>
                    <a href="#footpage">Follow</a>
                </section>
            </nav>

            <header>
                <h1>You love cooking, we love countries.</h1>
                <p>Take an international look through the cuisines of the world, and find easy-to-make recipes in a few clicks!</p>
                <a href="#main-chooser">Get Started</a>
            </header>

            <section id="about">
                <section className="about-text">
                    <h2>Cooking is more than just a recipe.</h2>
                    <p>It is an anthropological study. When we examine a dish like traditional Japanese Sushi or a heavy Italian Ragu, we aren't just looking at ingredients; we are looking at hundreds of years of trade, agriculture, and human ingenuity.</p>
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
                    <button className="country-button active" type="button">Italy</button>
                    <button className="country-button" type="button">Japan</button>
                    <button className="country-button" type="button">India</button>
                    <button className="country-button" type="button">Mexico</button>
                    <button className="country-button" type="button">China</button>
                </section>

                <section className="all-cards">
                    <section className="card-wrapp">
                    <section className="dish-card">
                        <img src="https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dish image" />
                        <h3 className="dish-title">Spaghetti Carbonara</h3>
                    </section>
                    </section>

                    <section className="card-wrapp">
                    <section className="dish-card">
                        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dish image" />
                        <h3 className="dish-title">Margherita Pizza</h3>
                    </section>
                    </section>

                </section>

            </section>

            <footer id="footpage">
                <p>Created by Saavan Shah, CSE 2004, Spring 2026</p>
            </footer>
        </section>
    );
}