const Router = require('express')
const router = new Router()
const spController = require('../controllers/spController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), spController.create)
router.get('/', spController.getALL)


module.exports = router