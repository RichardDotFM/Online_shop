import React, { useContext } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import { Context } from '../..';



const CreateProduct = ({ show, onHide}) => {
    const {product} = useContext(Context)
    return (
        <Modal
            show={show}
            onClick={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить товар
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
                    <Dropdown autoClose={false}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Выберите тип </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name }</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Выберите бренд </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name }</Dropdown.Item>
                                )}
                        </Dropdown.Menu>
                   </Dropdown>
    </Form>
        </Modal.Body>
        <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateProduct;