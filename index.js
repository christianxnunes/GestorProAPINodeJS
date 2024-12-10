const express = require('express')
const cors = require('cors')
const db = require('./db/conn')
// Inicía o express
const app = express()
// Configuração de cors
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
// Rotas da api
app.use('/funcionario', require('./routes/FuncionarioRoutes'))
// Persiste o banco de dados
db.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))