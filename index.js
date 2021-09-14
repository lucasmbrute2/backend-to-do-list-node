if(process.env.NODE_ENV!== 'production'){
    require('dotenv').config();
};
const whitelist = ['http://192.168.100.14:3000','http://localhost:3000' ]
const corsOptions = {
    origin: function (origin,callback){
        if(whitelist.indexOf(origin)!==-1){
            callback(null,true)
        }else{
            callback(new Error('Not allowed by Cors'))
        }
    }
};
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3003;
const Connect = require('./connect/connect');
const db_url = process.env.DB_URL;
const db_user= process.env.DB_USER;
const db_password= process.env.DB_PASSWORD;
const db_data= process.env.DB_DATA;
const tarefaRota = require('./routes/index.routes');

Connect(db_url,db_user,db_password,db_data);
app.use(express.json());
app.use('/tarefas',tarefaRota);
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
    res.send('Errou o EndPoint ai rs')
});
app.listen(process.env.PORT || port,()=>{
    console.info(`Servidor rodando em http://localhost:${port}`)
});