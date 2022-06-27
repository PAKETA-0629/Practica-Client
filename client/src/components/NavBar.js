import React, { useContext } from "react";
import { Context } from "..";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import TypeBar from "./TypeBar";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(SHOP_ROUTE)
    }

    return (
        <Navbar style={{backgroundColor:'black', margin:0, padding:0}}>
            <Container>
                <NavLink 
                    style={{color:'black', fontSize:25, textDecoration:'none', backgroundColor:'white', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, marginRight:5}} 
                    to={SHOP_ROUTE}>
                    <h2>BroShop</h2>
                </NavLink>
                {location.pathname === SHOP_ROUTE &&
                    <TypeBar/> 
                }
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(BASKET_ROUTE)}>Кошик</Button>
                        <Button variant={"outline-light"} className="ms-2" onClick={() => navigate(ADMIN_ROUTE)}>Адмін панель</Button>
                        <Button variant={"outline-light"} className="ms-2" onClick={() => logOut()}>Вихід</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Кошик</Button>
                        <Button variant={"outline-light"} className="ms-2" onClick={() => navigate(LOGIN_ROUTE)}>Логін</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;