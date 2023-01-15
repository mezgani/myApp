import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Costumers from "../components/Costumers";
import About from "../components/About";
import Contact from "../components/Contact";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import User from "../components/User";
import Login from "../components/Login";
import Logout from "../components/Logout";


export default (
  <Router>
    <Routes>
      <Route path="/" exact  element={<Home />} />
      <Route path="/products"   element={<Products />} />
      <Route path="/costumers"   element={<Costumers />} />
      <Route path="/about"  element={<About />} />
      <Route path="/contact"   element={<Contact />} />
      <Route path="/user"   element={<User />} />
      <Route path="/login"   element={<Login />} />
      <Route path="/logout"   element={<Logout />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/recipe" element={<NewRecipe />} />
    </Routes>
  </Router>
);
