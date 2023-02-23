import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
const MainNavigation = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container >
                <Navbar.Brand style={{ fontWeight: 'bold', fontSize: '25px' }}>Greate Quotes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "flex-end", fontWeight: 'bold', fontSize: '20px' }}>
                    <Nav >
                        <Nav.Link href="/quotes">All quotes</Nav.Link>
                        <Nav.Link href="new-quote">Add a Quote</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MainNavigation;