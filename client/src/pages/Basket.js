import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Row, Button } from "react-bootstrap";
import { Context } from "..";
import BasketItem from "../components/BasketItem";
import { fetchItems } from "../http/goodsAPI";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
    const {goods} = useContext(Context)

    let sum = 0;

    //ВИДАЛЕННЯ ТИМЧАСОВИХ ШМОТОК З ТИМЧАСОВОГО СПИСКУ BASKET
    //ДО ПОКИ БАБАК НЕ ЙОБНЕ ЗАПИТ ДО БД
    const deleteItem = (id) => {
        const confirm = window.confirm('Ви хочете видалити ' + goods.basket[id-1].name + ' з корзини?')
        if(confirm)
        {
            goods.setBasket(goods.basket.filter((basket) => basket.id !== id));
        }
        
    }

    return (
        <Row style={{marginTop:25}}>
            {goods.basket.map(basket => (
                sum += basket.price,
                <Row key={basket.id} id={basket.id} style={{display:'flex', justifyContent:'center', marginTop:-45}}>
                    <BasketItem goods={basket} deleteItem={deleteItem}/>
                </Row>
                )
            )}
            <Row style={{display:'flex', justifyContent:'center', textAlign:'center', marginTop:15, marginBottom:15}}>
                <h4 style={{marginBottom:15}}>Загальна сума: {sum} ГРН</h4>
                <Button variant='success' style={{width:350, height:75, fontSize:21, fontWeight:'bold'}}>Оформити замовлення</Button>
            </Row>
        </Row>
    );
});

export default Basket;