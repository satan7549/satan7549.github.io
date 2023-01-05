import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import { About } from "../Pages/About";
import { Skill } from "../Pages/Skills";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/header" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skill />} />
    </Routes>
  );
};
