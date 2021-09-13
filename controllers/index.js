const toDoModel = require('../model/model')

module.exports ={
    get: async (req,res)=>{
        await toDoModel.find({})
    .then(tarefa=>res.status(200).send(tarefa))
    .catch(err=>res.status(400).send(err))
    },
    getId: async (req,res)=>{
        await toDoModel.findOne({_id: req.params.id})
        .then(tarefa=>res.status(200).send(tarefa))
        .catch(err=>res.status(404).send(err))
    },
    post: async (req,res)=>{
        if(req.body && req.body.titulo && req.body.descricao && req.body.prioridade && req.body.estado && req.body.estado){
            await toDoModel.create(req.body)
            .then(res.status(201).send('Ok'))
        }else{
            res.status(404).send('erro')
        }
    },
    put: async (req,res)=>{
        await toDoModel.updateOne({ _id: req.params.id }, req.body)
        .then(res.status(200).send('Editado com sucesso!')) 
        .catch(err=>res.status(404).send(err))
    },

    deleteId: async (req,res)=>{
        await toDoModel.deleteOne({ _id: req.params.id })
        .then(res.status(200).send('Deletado com sucesso!'))
        .catch(err=>res.status(404).send(err))
    },
    deleteAll: async (req,res)=>{
        await toDoModel.deleteMany({})
        .then(res.status(200).send('Todos os itens foram apagados.'))
        .catch(err=>res.status(400).send(err))
    }
}