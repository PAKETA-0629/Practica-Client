import React from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { GOOD_ROUTE } from "../utils/consts";

const GoodItem = ({goods}) => {
    const navigate = useNavigate()

    return (
        <Col onClick={() => navigate(GOOD_ROUTE + '/' + goods.id)}>
            <Card className="mt-2 mb-2 ms-0 text-white bg-dark" style={{width:400, cursor:'pointer'}}>
                <Card.Img variant="top" src={process.env.REACT_APP_API_URL + goods.img}/>
                <Card.ImgOverlay style={{padding:0, margin:0, width:110, height:50, fontSize:20, display:'flex', justifyContent:'center', alignItems:'center', background:'#0d6efd'}}>
                    <Card.Text>{goods.price} ГРН</Card.Text>
                </Card.ImgOverlay>
                <Card.Body>
                    <Button style={{width:365, height:50, fontSize:20}}>{goods.name}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default GoodItem;