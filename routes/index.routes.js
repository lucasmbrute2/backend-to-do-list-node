const express  = require("express");
const router = express.Router()
const toDoModel = require('../model/model')
const controller = require('../controllers/index')

router.get('/',controller.get)

router.get('/:id',controller.getId)

router.post('/add',controller.post)

router.put('/edit/:id', async (req,res)=>{
    await toDoModel.updateOne({_id: req.params.id}, req.body)
    .then(()=>res.status(200).send('Tarefa editada com sucesso!'))
    .catch(err=>res.status(400).send(`${err} Algo deu errado tente novamente.`))
})

router.delete('/delete/:id', async (req,res)=>{
    await toDoModel.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).send('Tarefa apagada com sucesso!'))
    .catch(err=>res.status(400).send(`${err} Algo deu errado tente novamente.`))
})





module.exports = router;