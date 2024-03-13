const express = require('express')
const { UserModel} = require('./schema')
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


router.get('/course',async(req,res) =>{
    try{
        const test = await UserModel.find({})
        res.json(test)

    }catch(err){
        console.log(err)
    }
})


router.post('/add', async (req, res) => {
    try {
        const newData = UserModel.create(req.body);
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
});


router.get('/course/:id', async (req,res) => {
    const _id = req.params.id
    UserModel.findById({_id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.delete('/delete/:id', async(req,res) => {
    const _id = req.params.id
    UserModel.findByIdAndDelete({_id:_id})
    .then(res => res.json(res))
    .catch(err => console.log(err))
})

router.put(`/updateCard/:id`, async(req,res) => {
    const _id = req.params.id
    UserModel.findByIdAndUpdate({_id : _id},{
        name : req.body.name,
        duration : req.body.duration,
        ratings : req.body.ratings,
        imageLink : req.body.imageLink
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

module.exports = router