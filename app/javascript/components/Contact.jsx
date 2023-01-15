import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';


const Contact = () => {
return(
<div>
    <UserInfo name="Mezgani Ali" mail="ali.mezgani@icloud.com" mobile="00212644179451" image="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" 
    object="alamatoka" message="alamatoka">
    </UserInfo>
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
                        <Nav.Link href="/contact"><b>Contact</b></Nav.Link>

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
         
            </div>
            <form>
            <div className="col-md-6a col-lg-9a">
            <div className="card1 mb-6a">
            <div class="form-group" className="card-img-top">
            <div className='mb-6a' size='lg' textBefore='Large'>
              <input class="effect-1" type="text" placeholder={`Name and prename: ${props.name}`} />
              <input class="effect-1" type="text" placeholder={`Mail: ${props.mail}`} />
              <input class="effect-1" type="text" placeholder={`Mobile: ${props.mobile}`} />
              <input class="effect-1" type="text" placeholder={`Object: ${props.object}`} />
              <input class="effect-1" type="text" placeholder={`Message: ${props.message}`} />
            </div>
            </div>
            </div></div>
            <div align="right">
            <Link to="/update" className="btn btn-lg  custom-button d-inline-flex p-2" role="button">
            Submit personal message
            </Link>
            
            </div>
            
          </form>
          </div>
        </main>
      </div>
      <Footer />  
        </>);
   
};








  export default Contact; 
  