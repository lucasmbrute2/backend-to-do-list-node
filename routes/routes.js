const express  = require("express");
const router = express.Router()
const toDoModel = require('../model/model')

router.get('/', async (req,res)=>{
    await toDoModel.find({})
    .then(filme=>res.send(filme))
    .catch(err=>console.error(err))
})

router.get('/getById/:id', async (req,res) =>{
    await toDoModel.findOne({_id: req.params.id })
    .then(filme=>res.status(200).send(filme))
    .catch(err=>res.status(400).send(err))
})


module.exports = router;''