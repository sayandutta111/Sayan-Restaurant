import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link,useLocation } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  const clear = () => {
    window.localStorage.clear();
    navigate("/login");
  };
  let location=useLocation();
  useEffect(()=>{
    console.log("Location: ",location,"\nPathName: ",location.pathname)
  },[location]);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const isAuth = window.localStorage.getItem('Token');
  return (
    <>
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Nav.Link as={Link} to="/" className='app__navbar-logo'><img src={images.sayan}  alt="app__logo" /></Nav.Link>
      </div>
      <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto app__navbar-links">
      <Nav.Link as={Link} to="/" className={`${location.pathname==="/"?"active":" "}`}>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className={`${location.pathname==="/about"?"active":" "}`}>About</Nav.Link>
      <Nav.Link as={Link} to="/menu" className={`${location.pathname==="/menu"?"active":" "}`}>Special Menu</Nav.Link>
      <Nav.Link as={Link} to="/awards" className={`${location.pathname==="/awards"?"active":" "}`}>Awards</Nav.Link>
      <Nav.Link as={Link} to="/contact" className={`${location.pathname==="/contact"?"active":" "}`}>Contact</Nav.Link>
      <Nav.Link as={Link} to="/book-table" className={`${location.pathname==="/book-table"?"active":" "}`}>Book Table</Nav.Link>
     {isAuth ? 
       <Button
       style={{
         backgroundColor: "var(--color-black)",
         color: "white",
         padding: "0.5rem",
         float: "right",
         marginLeft: "4rem",
         width: "10%",
         cursor: "pointer",
         fontSize: "17px",
         fontWeight:"550",
         letterSpacing: "2px",
         border: "2px solid var(--color-grey)",
         borderRadius: "10px",
       }}
       variant="danger"
       onClick={clear}
     >
       Logout
     </Button>
     :
     <Nav.Link as={Link} to="/login" className={`${location.pathname==="/login"?"active":" "}`}>Log In </Nav.Link>
  
      
    }
    </Nav>
    </Container>
  </Navbar>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">

            <Nav.Link as={Link} to="/" onClick={() => setToggleMenu(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setToggleMenu(false)}>About</Nav.Link>
              <Nav.Link as={Link} to="/menu" onClick={() => setToggleMenu(false)}>Special Menu</Nav.Link>
              <Nav.Link as={Link} to="/awards" onClick={() => setToggleMenu(false)}>Awards</Nav.Link>
              <Nav.Link as={Link} to="/book-table" onClick={() => setToggleMenu(false)}>Book Table</Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={() => setToggleMenu(false)}>Login</Nav.Link>
              
            </ul>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default MyNavbar;
