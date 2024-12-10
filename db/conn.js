const { Sequelize } = require('sequelize')
// 7bfvWio7GQIY
const sequelize = new Sequelize('cr2siste_chris', 'root', '', {
    host: 'localhost',
    porta: '3306',
    dialect: 'mysql'
})

module.exports = sequelize