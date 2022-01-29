const { Sp } = require('../models/models')
const ApiError = require('../error/ApiError');

class spController {
    async create(req, res) {
        const { name } = req.body
        const sp = await Sp.create({ name })
        return res.json(sp)
    }

    async getALL(req, res) {
        const sp = await Sp.findAll()
        return res.json(sp)
    }

}

module.exports = new spController()