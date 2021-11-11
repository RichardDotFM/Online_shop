const { Type } = require('../models/models')
const ApiError = require('../error/ApiError');

class typeController {
    async create(req, res) {
        const { name } = req.body
        const type = await Type.create({ name })
        return res.json(type)
    }

    async getALL(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new typeController()