import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../pages/Header";
import About from "../pages/About";
import Home from "../pages/Home/Home";
import MarketPlace from "../pages/market_place/MarketPlace";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/header" element={<Header />} />
                <Route path="/market-place" element={<MarketPlace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
