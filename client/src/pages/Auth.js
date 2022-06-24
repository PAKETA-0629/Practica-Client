import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            console.log(user.isAuth)
            console.log(user.user)
            navigate(SHOP_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
        
    }

    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 680}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Login Form' : 'Registration Form'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-4"
                    placeholder="Login"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 ms-0 me-0">
                        <Button variant={"outline-success"} onClick={click}>
                            {isLogin ? 'Login' : 'Make an account'}
                        </Button>
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                        
                        }
                        
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;