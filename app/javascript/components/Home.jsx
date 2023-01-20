import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Blink from  "react-blink-text";
import Pagination from "./Pagination";
import Footer from './Footer';


function Home() {
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
            View details
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



  return(
  <><Navbar bg="white" expand="lg">
            <Container>
              <Navbar.Brand href="/">TheFork</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"><b>Home</b></Nav.Link>
                  <Nav.Link href="/products">Products</Nav.Link>
                  <Nav.Link href="/costumers">Costumers</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>

                  {/*
    <NavDropdown title="User actions" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Append a restaurent</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        Edit a restaurent
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Update a restaurent</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
        Delete
      </NavDropdown.Item>
    </NavDropdown>
    */}

















                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="/user">Mark Otto</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
  <div className="vw-100 vh-50 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-9 top-buffer">Food Recipes</h1>
          <p className="lead1">
            A curated list of recipes and restaurents for the best homemade meal and delicacies.
          </p>
          <br></br>
          <form>
            <div class="form-group">
              <div className='mb-6' size='lg' textBefore='Large'>
                <input class="effect-1" type="text" placeholder="Type the restaurent's name you search" />
              </div>
            </div>
          </form>
          <br></br>
          <div align="right">
            <Link to="/recipes" className="btn btn-lg  custom-button d-inline-flex p-2" role="button">
              Search for a restaurent
            </Link>
          </div>
          <br></br>
          
          <section className="jumbotron jumbotron-fluid text-center">
      <div className="container py-5">
        <h1 className="display-4">Recipes for every occasion</h1>
        <p className="lead2 text-muted">
          We’ve pulled together our most popular recipes, our latest
          additions, and our editor’s picks, so there’s sure to be something
          tempting for you to try.
        </p>
      </div>
    </section>
    <div className="py-5">
        <main className="container">

          <div className="row">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <div className="row">
            <div className="pagy d-flex align-items-end justify-content-end" align="right">
              <Pagination />
            </div>
          </div>
        </main>
        </div>
    <Footer />
        </div>
      </div>
    </div></>   
  );
};

export default Home;
