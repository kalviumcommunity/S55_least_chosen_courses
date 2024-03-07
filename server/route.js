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


app.post('/add', async (req, res) => {
    try {
        const newData = UserModel.create(req.body);
        res.send(newData);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
});
module.exports = router