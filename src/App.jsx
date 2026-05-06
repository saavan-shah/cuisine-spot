import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import FullRecipe from "./FullRecipe.jsx";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/recipe/:id" element={<FullRecipe />} />
    </Routes>
  );
}

export default App
