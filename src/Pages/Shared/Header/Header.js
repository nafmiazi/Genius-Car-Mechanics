import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {users.email?
                            <button onClick={logOut} className="btn btn-primary">Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{users.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>                      
                </Container>
            </Navbar>
        </>
    );
};

export default Header;