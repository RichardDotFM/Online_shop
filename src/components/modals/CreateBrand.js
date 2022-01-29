import React, {useState} from 'react';
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';
import { createBrand } from '../../http/productAPI';


const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('')

  const addBrand = () => {
      createBrand({name: value}).then(data => {
          setValue('')
          onHide()
      })
  }

  return (
    <Modal show={show} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Добавить бренд
        </Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
             value={value}
             onChange={e => setValue(e.target.value)}
            placeholder={'Введите название бренда'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;