import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import {useParams} from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI';
const ProductPage = () => {
    const [product, setProduct] = useState({ info: [] })   
    const {id} = useParams()
  

    useEffect(() => {
    
        fetchOneProduct(id).then(data => setProduct(data))

}, [] )

    
    return (
        <Container className="mt-3">
            <Row>
            <Col md={4} className="d-flex flex-column aligt-items-center">
                    <Image widht={300} height={400} src={process.env.REACT_APP_API_URL + product.img} />
                    <h2>
                        {product.name}
                    </h2>
            </Col>
            
                <Col md={4}>
                    <h1>Описание: </h1>
                    <Row className="d-flex flex-column"
                    style={{ widht: 200, height: 150, fontSize: 23 }}
                    >
                {product.info.map((info, index ) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                </Row>
                )}
            </Row>
                    
                </Col>
               <Col>
                <Card
                    className="d-flex flex-column aligt-items-center justify-content-around"
                        style={{ widht: 200, height: 150, fontSize: 23, border: '5px solid lightgray' }}
                    >
                        <h3>От: {product.price} руб.</h3>
                        <Button variant={"outline-dark"} > Добавить в корзину </Button>
                </Card>
                </Col>
            </Row>
           
    </Container>
    );
};

export default ProductPage;