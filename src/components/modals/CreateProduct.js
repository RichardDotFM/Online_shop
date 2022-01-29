import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form, Dropdown, CloseButton, FormControl, Row, Col } from 'react-bootstrap';
import { Context } from '../..';
import { createProduct, fetchBrands, fetchTypes,  } from '../../http/productAPI';



const CreateProduct = ({ show, onHide }) => {
  const { product } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [sp, setSp] = useState('');

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrand(data))
}, [])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo( info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}

  const selectFile = e => {
  setFile(e.target.files[0])

}

const addProduct = () => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('price', `${price}`)
  formData.append('img', file)
  formData.append('brandId', product.selectedBrand.id)
  formData.append('typeId', product.selectedType.id)
  formData.append('info', JSON.stringify(info))
  createProduct(formData).then(data => onHide())
}
  
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
            {product.types.map(type =>
                <Dropdown.Item
                  onClick={() => product.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              {brand !== '' ? brand : 'Выберите бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {product.brands.map(brand =>
               <Dropdown.Item
                 onClick={() => product.setSelectedBrand(brand)}
                 key={brand.id}
               >
                 {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown> 
          <Dropdown className='mt-3'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              {sp !== '' ? sp : 'Выберите вид'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.sps.map((sp) => (
                <Dropdown.Item
                onClick={() => product.setSelectedSp(sp)}
                key={sp.id}
                >
                  {sp.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <FormControl
            value={name}
onChange={e => setName(e.target.value)}
            className='mt-3'
          placeholder="Введите название"
          />
          <FormControl
            value={price}
onChange={e => setPrice(Number(e.target.value))}
            className='mt-3'
            placeholder="Введите стоимость"
            type="number"
          />
          <FormControl
            className='mt-3'
            type="file"
            onChange={selectFile}
          />
          <hr />
          <Button
            variant={"outline-dark"}
            onClick={addInfo}
          >
            Добавить новое свойство 
          </Button>
          {info.map(i =>
              <Row className='mt-2' key={i.number}>
              <Col md={4}>
                <FormControl
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder="Введите название"
                />
              </Col>
              <Col md={4}>
                <FormControl
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                placeholder="Введите описание"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить</Button>
              </Col>
  </Row>
              )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Закрыть
        </Button>
        <Button variant='outline-success' onClick={addProduct}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;