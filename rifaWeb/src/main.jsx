import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/sorteios/index";
import Resultados from "./pages/resultados/index";
import Header from "./assets/components/header/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<Resultados />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  </React.StrictMode>
);
