import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const { product } = useContext(Context)
    return (
      
        <Dropdown className="d-flex">
         <Dropdown.Toggle>
          {'Бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {product.brands.map(brand =>
                <Dropdown.Item>
                <Card 
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => product.setSelectedBrand(brand)}
                    border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
                >
                 {brand.name}   
                </Card>
                </Dropdown.Item>
            )} </Dropdown.Menu>
            
            </Dropdown>
    );
});

export default BrandBar;