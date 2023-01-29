import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import logo from '../../../logo/logo2.png'
const NavMenu = () => {
  const [loggedinUser] = useContext(UserContext);
    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderBottom:'3px solid #ddd'}}  className="py-4">
        <Container>
        <Link  className='text-decoration-none' to="/home">
          <Navbar.Brand><img className='img-fluied' style={{height:'70px',background:'#998623',borderRadius:'50%',}} src={logo} alt="" /></Navbar.Brand>
       </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" className='text-decoration-none px-4'>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className='text-decoration-none px-4'>About Us</Nav.Link>
                 <Nav.Link as={Link} to="/projects"  className='text-decoration-none px-4'>Projects</Nav.Link>
                 <Nav.Link as={Link} to="/contact" className='text-decoration-none px-4'>Contact</Nav.Link>
                 <Nav.Link as={Link} to="/dashboard/book" className='text-decoration-none px-4'>Admin</Nav.Link>
              
            </Nav>
            {!loggedinUser.email && <Nav className=''>
              <Nav.Link as={Link} to="/login" eventKey={2}>
               Login
              </Nav.Link>
            </Nav>}
            {loggedinUser.email && <Nav className=''>
              <Nav.Link as={Link} to="/login" eventKey={2}>
               Logout
              </Nav.Link>
            </Nav>}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default NavMenu;