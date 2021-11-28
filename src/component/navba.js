import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'


function Navba({setSearch,setSearchRate}) {
    const ratingChanged = (newRating) => {
        setSearchRate(newRating);
      };      
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Movies Card</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link   as={Link} to='/' >Home</Nav.Link>
      
        <NavDropdown as={Link}  to='/movie' title="Movies" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Fantasy</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Adventure
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange= {e=> setSearch(e.target.value)}
        />
      </Form>
      <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="red" />
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navba
