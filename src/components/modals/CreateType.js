import React, { useState } from 'react';
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';
import { createType } from '../../http/productAPI';

const CreateType = ({ show, onHide }) => {
const [value, setValue] = useState ( '')
  const addType = () => {
    createType({ name: value}).then(data => {
      setValue('')
      onHide()
    })

}

  return (
    <Modal show={show} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Добавить тип
        </Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Введите название типа'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;