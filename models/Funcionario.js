const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Funcionario = db.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    }
}, {
   timestamps: true, 
})

module.exports = Funcionario