const uuid = require('uuid')
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError')
class productController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }



            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getALL(req, res) {
        let { brandId, typeId, spId, limit, page } = req.query
        page = page || 1
        limit = limit || 5
        let offset = page * limit - limit
        let products;
        if (!brandId && !typeId && !spId) {
            products = await Product.findAndCountAll({ limit, offset })
        }
        if (brandId && !typeId && !spId) {
            products = await Product.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (brandId && typeId && !spId) {
            products = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        }
        if (!brandId && typeId && !spId) {
            products = await Product.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (!brandId && typeId && spId) {
            products = await Product.findAndCountAll({ where: { typeId, spId }, limit, offset })
        }
        if (brandId && !typeId && spId) {
            products = await Product.findAndCountAll({ where: { brandId, spId }, limit, offset })
        }
        if (!brandId && !typeId && spId) {
            products = await Product.findAndCountAll({ where: { spId }, limit, offset })
        }
        if (brandId && typeId && spId) {
            products = await Product.findAndCountAll({ where: { brandId, typeId, spId }, limit, offset })
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne({
                where: { id },
                include: [{ model: ProductInfo, as: 'info' }]
            },

        )
        return res.json(product)
    }
}

module.exports = new productController()