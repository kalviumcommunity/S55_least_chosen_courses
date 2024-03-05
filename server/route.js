const express = require('express')
const { Model } = require('mongoose')
const router = express.Router()

router.use(express.json())

router.get('/get',(req,res)=>{
    res.send('get request')
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

router.put('/put',(req,res)=>{
    res.send("put request")
})

router.delete('/delete',(req,res)=>{
    res.send("delete request")
})


router.get('/courses',async(req,res) =>{
    try{
        const test = await Model.find()
        res.json(test)

    }catch(err){
        console.log(err)
    }
})
module.exports = router