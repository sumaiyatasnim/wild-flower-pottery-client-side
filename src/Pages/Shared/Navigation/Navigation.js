import React from 'react';
import './navigation.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "../../../Pottery/pottery.png"
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <img className="img-fluid logo" src={logo} alt="" /> </Navbar.Brand>
                    <h3 className='siteName fs-2'>Wild Flower Pottery</h3>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-dark fs-5' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-dark fs-5' as={HashLink} to="/products">Pottery collections</Nav.Link>

                        <Nav.Link className='text-dark fs-5' as={HashLink} to="/about">About</Nav.Link>



                        {user?.email ?
                            <div className='d-flex'>
                                <Nav.Link className='text-dark fs-5' as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                                <Button className='text-dark fs-5' onClick={logout} variant="light">Logout</Button>
                            </div>
                            :
                            <Nav.Link className='text-dark fs-5' as={Link} to="/login">Login</Nav.Link>}

                        {/* <Navbar.Text className="text-dark">
                            Signed in as: <Link to="/register" className="text-decoration-none text-success fw-bold">{user?.displayName || user.email}</Link>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;