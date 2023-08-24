import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { About } from "../pages/About";
import { Pokedex } from "../pages/Pokedex";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  );
};
