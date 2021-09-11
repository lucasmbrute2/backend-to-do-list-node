if(process.env.NODE_ENV!== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const port = 3003;
const Connect = require('./connect/connect')
const db_url = process.env.DB_URL
const db_user= process.env.DB_USER
const db_password= process.env.DB_PASS
const db_data= process.env.DB_DATA
const tarefaRota = require('./routes/routes')

app.use(express.json());
app.use('/tarefas',tarefaRota)
Connect(db_url,db_user,db_password,db_data)

app.listen(port,()=>{
    console.info(`Servidor rodando em http://localhost:${port}`)
})