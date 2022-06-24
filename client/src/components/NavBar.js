import React, { useContext } from "react";
import { Context } from "..";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(SHOP_ROUTE)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>BroShop</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</Button>
                        <Button variant={"outline-light"} className="ms-2" onClick={() => logOut()}>Logout</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;