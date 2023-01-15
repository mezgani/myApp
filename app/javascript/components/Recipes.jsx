import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Blink from  "react-blink-text";

const MenuBar = () => {
return (
    <><Navbar bg="white" expand="lg">
        <Container>
            <Navbar.Brand href="/">TheFork</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/costumers">Costumers</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="/user">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
 </>
);
};



const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setRecipes(res))
      .catch(() => navigate("/"));
  }, []);

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={`${recipe.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  ));
  const noRecipe = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No recipes yet. Why not <Link to="/new_recipe">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
    <MenuBar />
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/recipe">
              Create New Recipe
            </Link>
          </div>
          <div className="row">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div><Footer />
    </>
  );
};

export default Recipes;
