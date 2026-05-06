import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App
