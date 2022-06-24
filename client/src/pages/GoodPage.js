import React, { useEffect, useState } from 'react';
import {Col, Row, Container, Image} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { fetchItem } from '../http/goodsAPI';

const GoodPage = () => {
    const [cloth, setCloth] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchItem(id).then(data => setCloth(data))
    }, [])

    return (
        <Container>
            <Col md={4} className="mt-3">
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + cloth.img}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{cloth.name}</h2>
                </Row>
            </Col>
            <Col md={4}>
            </Col>
        </Container>
    );
};

export default GoodPage;