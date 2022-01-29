import React, { useContext, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList"
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchProducts, fetchSps, fetchTypes } from '../http/productAPI';
import { Context } from '..';

const Chinchilla = observer(() => {
    const { product } = useContext(Context)
  
    useEffect(() => {
      fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrand(data))
        
      fetchProducts(null, null, 1, 2).then(data => {
        product.setProducts(data.rows)
        
      })
    }, [])
  
    useEffect(() => {
      fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(data => {
          product.setProducts(data.rows)
          
      })
  }, [product.page, product.selectedType, product.selectedBrand,])


    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ProductList/>
                   
                </Col>
            </Row>
        </Container>
    );
});

export default Chinchilla;