import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';

const User = () => {
return(
<div>
    <UserInfo username="mezgani" cname="Mezgani Ali" mail="ali.mezgani@icloud.com" mobile="00212644179451" image="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" 
    password="alamatoka" cpassword="alamatoka">
    </UserInfo>
    <Footer />
</div>
);
};



function UserInfo(props) {

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
               <a href="/logout">Sign out</a>
          </Navbar.Text>
          </Navbar.Collapse>
          </Container>
        </Navbar>

  


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
            <div className="rowuser">
              <div className="col-md-6 col-lg-4">
              <Navbar bg="dark" expand="lg" fg="white">
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

          </Container>
        </Navbar>
              </div>
              </div>
              </main>
              </div>





        <div className="py-5">
          <main className="container">
            <div className="rowuser">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <img
                    src={props.image}
                    className="card-img-top"
                    alt={props.cname} />
                </div>
              </div>
              <form>
                <div className="col-md-6a col-lg-9a">
                  <div className="card1 mb-6a">
                    <div class="form-group" className="card-img-top">
                      <div className='mb-6a' size='lg' textBefore='Large'>
                        <input class="effect-1" type="text" placeholder={`Username: ${props.username}`} />
                        <input class="effect-1" type="text" placeholder={`Complete name: ${props.cname}`} />
                        <input class="effect-1" type="text" placeholder={`Mail: ${props.mail}`} />
                        <input class="effect-1" type="text" placeholder={`Mobile: ${props.mobile}`} />
                        <input class="effect-1" type="text" placeholder={`Password: ${props.password}`} />
                        <input class="effect-1" type="text" placeholder={`Confirm password: ${props.cpassword}`} />
                      </div>
                    </div>
                  </div></div>
                <div align="right">
                  <Link to="/update" className="btn btn-lg  custom-button d-inline-flex p-2" role="button">
                    Update personal informations
                  </Link>

                </div>

              </form>
            </div>
          </main>
        </div>
     
      </>);
};








  export default User; 
  