import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateItem from '../components/modals/CreateItem';
import { useState, useContext} from 'react';
import { Context } from '..';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    const { user } = useContext(Context)

    console.log(user.isAuth)

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setTypeVisible(true)}>Додати категорію</Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={() => setItemVisible(true)}>Додати товар</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
        </Container>
    );
};

export default Admin;