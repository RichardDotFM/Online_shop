import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Сухой корм MONGE CAT STERILISED CHICKEN',
    price: 365,
    rating: 5,
    img: '6d2c50b8-219c-4068-a848-b7d761db78f2.jpg',
  };
  const description = [
    { id: 1, title: 'Цвет', description: 'розовый' },
    { id: 2, title: 'емкость', description: '200 мл' },
  ];
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4} className='d-flex flex-column aligt-items-center'>
          <Image widht={300} height={300} src={product.img} />
          <h2>{product.name}</h2>
        </Col>

        <Col md={4}>
          <h1>Описание: </h1>
          <Row
            className='d-flex flex-column'
            style={{ widht: 200, height: 150, fontSize: 23 }}
          >
            {description.map((info, index) => (
              <Row
                key={info.id}
                style={{
                  background: index % 2 === 0 ? 'lightgray' : 'transparent',
                  padding: 10,
                }}
              >
                {info.title}: {info.description}
              </Row>
            ))}
          </Row>
        </Col>
        <Col>
          <Card
            className='d-flex flex-column aligt-items-center justify-content-around'
            style={{
              widht: 200,
              height: 150,
              fontSize: 23,
              border: '5px solid lightgray',
            }}
          >
            <h3>От: {product.price} руб.</h3>
            <Button variant={'outline-dark'}> Добавить в корзину </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
