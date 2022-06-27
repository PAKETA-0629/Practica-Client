import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createType } from "../../http/goodsAPI";
//import { Context } from "../..";
//import { useContext } from "react";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState()
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Додати нову категорію товару</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form.Label className="mt-3">Назва категорії</Form.Label>
                    <Form.Control placeholder="Наприклад: Верхній одяг" value={value} onChange={e => setValue(e.target.value)}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={addType}>Додати</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};

export default CreateType;