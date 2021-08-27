import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <header>

            <Navbar collapseOnSelect expand="md" style={{backgroundColor: '#a2d2ff'}}>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" exact>Doutor Nutrição</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/" exact>Início</Nav.Link>
                            <Nav.Link as={NavLink} to="/postagens-salvas">Postagens Salvas</Nav.Link>
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
