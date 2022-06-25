import React from "react";
import { CloseButton } from "react-bootstrap";

const BasketItem = ({goods, deleteItem}) => {

    return (
        <div style={{width:800, height:152, marginLeft:0, marginTop:50, display:'flex', border:'1px solid black'}}>
            <img style={{marginLeft:-12, marginRight:15, width:150, height:150, backgroundColor:'black'}} src={process.env.REACT_APP_API_URL + goods.img}/>     
            <div style={{width:500}}>
                <h2>{goods.name}</h2>
                <h5>{goods.price} ГРН</h5>
            </div>
            <CloseButton style={{marginTop:12, marginLeft:150}} onClick={() => deleteItem(goods.id)}/>
        </div>
    );
};

export default BasketItem;