import React, { useEffect, useState, useContext } from 'react';
import { Container, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { fetchItem } from '../http/goodsAPI';
import { Context } from '..';

const GoodPage = () => {
    const {goods} = useContext(Context)
    const [cloth, setCloth] = useState({info: []})

    const min = 1, max = 20
    const [qty, setQty] = useState(1)
    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setQty(value);
      };

    const {id} = useParams()
    useEffect(() => {
        fetchItem(id).then(data => setCloth(data))
    }, [])

    const addToBasket = (cloth, qty) => {
        const newItem = [
            ...goods.basket,
            {
                id: cloth.id,
                name: cloth.name,
                price: cloth.price,
                img: cloth.img,
                qty: qty,
            }]
        goods.setBasket(newItem)
        
    }

    return (
        <Container style={{height:'auto', backgroundColor:'black'}}>
            <div style={{height:'100%', marginBottom:'24.1%', display:'inline-flex', backgroundColor:'black', color:'white'}}>
                <div>
                    <img width={600} height={600} src={process.env.REACT_APP_API_URL + cloth.img}/>
                </div>
                <div style={{marginTop:-16, padding:0}}>
                    <div style={{paddingLeft:5}}>
                        <hr/>
                        <h2>{cloth.name}</h2>
                        <hr/>
                        <h4>Опис:</h4>
                        <p style={{height:252}}>
                            {cloth.description}
                        </p>
                        <hr/>
                        <h3>Ціна: {cloth.price} ГРН</h3>
                        <hr/>
                        <h4>Кількість: 
                            <input
                                style={{height:35, marginLeft:25}}
                                type='number'
                                value={qty}
                                onChange={handleChange}
                            />
                        </h4>
                        <hr/>
                        <Button style={{}} onClick={() => addToBasket(cloth, qty)}>До кошика</Button>
                        <hr/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default GoodPage;