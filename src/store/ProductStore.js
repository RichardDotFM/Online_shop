import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [ ]
        this._brands = []
        this._sps = [
            { id: 1, name: 'крысы'},
            { id: 2, name: 'хомяки' },
            { id: 3, name: 'мыши' },
            { id: 4, name: 'дегу' },
            { id: 5, name: 'шиншиллы' },
            { id: 6, name: 'морские свинки' },
            { id: 7, name: 'кролики'},
        ]
        this._products = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedSp = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrand(brands) {
        this._brands = brands
    }
    setSp(sps) {
        this._sps = sps
    }
    setProducts(products) {
        this._products = products
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setSelectedSp(sp) {
    this._selectedSp = sp
    }
    

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get sps() {
        return this._sps
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedSp() {
        return this._selectedSp
    }
}