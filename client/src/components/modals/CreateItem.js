import { Modal, Form, Button, Dropdown } from "react-bootstrap";
import { Context } from "../..";
import { useContext, useState, useEffect } from "react";
import { fetchTypes, fetchItems } from '../../http/goodsAPI';
import { observer } from "mobx-react-lite";
import { createItem } from "../../http/goodsAPI";

const CreateItem = observer(({show, onHide}) => {
    const {goods} = useContext(Context)
    //const [itemVisible, setItemVisible] = useState(false)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetchTypes().then(data => goods.setTypes(data))
        fetchItems().then(data => goods.setGoods(data.rows))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    
    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', goods.selectedType.id)
        createItem(formData).then(data => onHide())
        goods.setSelectedType.id = null;
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Додати товар</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>
                                {goods.selectedType.name || "Виберіть категорію"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {goods.types.map(type =>
                                    <Dropdown.Item 
                                    onClick={() => goods.setSelectedType(type)} 
                                    key={goods.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Label className="mt-3">Назва товару</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Наприклад: Сорочка біла" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                        />
                        <Form.Label className="mt-3">Вартість товару</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={price} 
                            onChange={e => setPrice(Number(e.target.value))}
                        />
                        <Form.Label className="mt-3">Зображення товару</Form.Label>
                        <Form.Control 
                            type="file"
                            onChange={selectFile}
                        />
                        <Form.Label className="mt-3">Опис товару</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            placeholder="Додайте опис"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-danger">Відмінити</Button>
                    <Button variant="outline-success" onClick={addItem}>Додати</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
});

export default CreateItem;