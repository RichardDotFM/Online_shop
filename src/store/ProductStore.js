import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: 'миски' },
      { id: 2, name: 'корм' },
      { id: 3, name: 'лакомства' },
      { id: 4, name: 'игрушки' },
    ];
    this._brands = [
      { id: 1, name: 'Wellkiss' },
      { id: 2, name: 'Monge' },
    ];
    this._products = [
      {
        id: 1,
        name: 'Сухой корм MONGE CAT STERILISED CHICKEN',
        price: 365,
        rating: 5,
        img: '6d2c50b8-219c-4068-a848-b7d761db78f2.jpg',
      },
      {
        id: 2,
        name: 'Petmax Миска металл для собак резиновое основание цветной рисунок 700мл',
        price: 499,
        rating: 5,
        img: 'ed2d4aff-2160-4be0-9389-cae5ed33adf5.jpg',
      },
      {
        id: 3,
        name: 'Petmax Миска металл для кошек резиновое основание цветной 500мл',
        price: 400,
        rating: 5,
        img: '118e14b2-81f8-441c-91d2-d0654f69eff0.jpg',
      },
      {
        id: 5,
        name: 'Миска металл для кошек резиновое основание цветной 500мл',
        price: 400,
        rating: 5,
        img: '5ca70026-6756-4a35-b438-4f52629d567b.jpg',
      },
      {
        id: 7,
        name: 'Миска металл для кошек2345 резиновое основание цветной 500мл',
        price: 400,
        rating: 5,
        img: 'c7884586-9ddf-424d-9d2a-5ab474768701.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrand(brands) {
    this._brands = brands;
  }
  setProducts(products) {
    this._products = products;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get products() {
    return this._products;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
