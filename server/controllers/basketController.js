const { Product, BasketProduct, Basket } = require("../models/models") 

class basketController {

    async addToBasket(req, res, next) {
    const user = req.user
        const { productId } = req.body
        const basket = await BasketProduct.create({basketId : user.id, productId : productId})
return res.json(basket)
}

    async getBasketUser(req, res) {
        const {id} = req.user
        const basket = await BasketProduct.findAll({
            include: {
    model: Product
}, where: {basketId: id}})

return res.json(basket)
    }


}

module.exports = new BasketProduct()