const db = require('../db/conn')
const Funcionario = require('../models/Funcionario')

module.exports = class FuncionarioControllers {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns Retorna todos os funcionários em formato json
     */
    static async get(req, res) {
        const transaction = await db.transaction()
        const funcionarios = await Funcionario.findAll({raw: true, transaction})

        try {
            await transaction.commit()
            return res.status(201).json(funcionarios)
        } catch (error) {
            await transaction.rollback()
            return res.status(500).json({message: `${error}`})
        }
    }
}