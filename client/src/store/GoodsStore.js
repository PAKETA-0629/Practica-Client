import {makeAutoObservable} from 'mobx';

export default class GoodsStore {
    constructor() {
        this._types = []
        this._goods = []
        this._basket = [
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._basketCount = 0
        this._limit = 9
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setGoods(goods) {
        this._goods = goods
    }
    setBasket(items) {
        this._basket = items
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get goods() {
        return this._goods
    }
    get basket() {
        return this._basket
    }
    get selectedType() {
        return this._selectedType
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}