import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Row, Button, NavLink } from "react-bootstrap";
import { Context } from "..";
import BasketItem from "../components/BasketItem";
import { fetchItems } from "../http/goodsAPI";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from "../utils/consts";

const Basket = observer(() => {
    const {goods} = useContext(Context)
    let key = 0;
    let sum = 0;
    const deleteItem = (id) => {
        goods.setBasket(goods.basket.filter((item) => item.id !== id));
    }

    return (
        <Row style={{marginTop:25}}>
            
            {goods.basket.map(basket => (
                sum += basket.price * basket.qty,
                key += 1,
                <Row key={key} id={basket.id} style={{display:'flex', justifyContent:'center', marginTop:-45}}>
                    <BasketItem goods={basket} deleteItem={deleteItem}/>
                </Row>
                )
            )}
            {goods.basket.length > 0 
            ?
            <Row style={{display:'flex', justifyContent:'center', textAlign:'center', marginTop:15, marginBottom:15}}>
                <h4 style={{marginBottom:15}}>Загальна сума: {sum} ГРН</h4>
                <Button variant='success' style={{width:350, height:75, fontSize:21, fontWeight:'bold'}}>Оформити замовлення</Button>
            </Row>
            : 
            <Row style={{textAlign:'center', color:'gray', marginTop:250, marginBottom:15}}>
                <h4>В кошику нічого немає, додайте щось!</h4>
            </Row>
            }
        </Row>
    );
});

export default Basket;