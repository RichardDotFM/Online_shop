import React from 'react';
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';
const CreateSp = ({ show, onHide }) => {
  return (
    <Modal show={show} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Добавить вид
        </Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Введите название вида'} />
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

export default CreateSp;