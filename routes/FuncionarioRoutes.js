const router =  require('express').Router()
const FuncionarioControllers = require('../controllers/FuncionarioControllers')

router.get('get', FuncionarioControllers.get)

module.exports = router