import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';


const ProductItem = ({ product }) => {
    
        const navigate = useNavigate()
    
        return (
            <Col md={3} className={"mt-3"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)} >
                <Card style={{ width: 170, cursor: 'pointer' }} border={"light"} >
                    <Image width={200} height={200} src={process.env.REACT_APP_API_URL + product.img} />
                    <div className="text-black-50 d-flex justify-content-between align-items-center">
                        <div> </div>
                    </div>
                    <div>
                        {product.name}
                    </div>
                </Card>
            </Col>
        );
    };


export default ProductItem;