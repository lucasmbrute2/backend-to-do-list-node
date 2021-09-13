const toDoModel = require('../model/model')

module.exports ={
    
    get: async (req,res)=>{
        await toDoModel.find({})
    .then(tarefa=>res.status(200).send(tarefa))
    .catch(err=>console.error(err))
    },
    getId: async (req,res)=>{
        await toDoModel.findOne({_id: req.params.id})
        .then(tarefa=>res.status(200).send(tarefa))
        .catch(err=>res.status(404).send(err))
    },
    post: async (req,res)=>{
        if(req.body && req.body.titulo && req.body.descricao && req.body.prioridade && req.body.estado && req.body.estado){
            await toDoModel.create(req.body)
            .then(tarefa=>res.status(200).send(tarefa))
        }else{
            res.status(400).send('erro')
        }
    },
    put: async (req,res)=>{
        // if(req.body && req.body.titulo && req.body.descricao && req.body.prioridade && req.body.estado && req.body.estado)
   
    }
}