import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        
        <>
        <Navbar className="container-fluid" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Car Sales</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/allCar#allCar">Car</Nav.Link>
                    <Nav.Link as={HashLink} to="/moreCar#moreCar">More Car</Nav.Link>
                    <Nav.Link as={HashLink} to="/reviews#reviews">Reviews</Nav.Link>
                    <Nav.Link as={HashLink} to="/aboutUs#aboutUs">About Us</Nav.Link>
                    {user?.email &&
                      <Nav.Link as={HashLink} to="/dashboard#dashboard">Dashboard</Nav.Link>
                    }
                    
                    {user?.email ?
                            <Button onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                    WC: <a href="#login">
                        {user?.displayName}
                    </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;