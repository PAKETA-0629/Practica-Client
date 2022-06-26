import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Context } from '..';
import GoodsList from '../components/GoodsList';
import TypeBar from '../components/TypeBar';
import Pages from '../components/Pages';
import { fetchTypes, fetchItems } from '../http/goodsAPI';
import { observer } from 'mobx-react-lite';


const Shop = observer(() => {
    const {goods} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => goods.setTypes(data))
        fetchItems(null, null, 9, 9).then(data => {
            goods.setGoods(data.rows)
            goods.setTotalCount(data.count)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetchItems(goods.selectedType.id, goods.page, 9).then(data => {
            goods.setGoods(data.rows)
            goods.setTotalCount(data.count)
        })
    }, [goods.selectedType.id, goods.page, 9])

    return (
        <Container style={{backgroundColor:'black', marginTop:0}}>
            <Row>
                <Row>
                    <Col>
                        <Pages/>
                        <GoodsList/>
                        <Pages/>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
});

export default Shop;