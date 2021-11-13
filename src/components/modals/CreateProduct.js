import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, CloseButton } from 'react-bootstrap';
import { Context } from '../..';

const CreateProduct = ({ show, onHide }) => {
  const { product } = useContext(Context);
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');

  return (
    <Modal show={show} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Добавить товар
        </Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown autoClose={true}>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              {type !== '' ? type : 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item key={type.id} onClick={() => setType(type.name)}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              {brand !== '' ? brand : 'Выберите бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => setBrand(brand.name)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
