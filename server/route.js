const express = require("express");
const { UserModel } = require("./schema");
const { loginMethod } = require('./TokenSchema')
const router = express.Router();
const Joi = require("joi");

router.use(express.json());

const NewSchema = Joi.object({
  name: Joi.string().required(),
  duration: Joi.string().required(),
  ratings: Joi.string().required(),
  imageLink: Joi.string().required(),
});

router.get("/get", (req, res) => {
  res.send("get request");
});

router.post("/post", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.put("/put", (req, res) => {
  res.send("put request");
});

router.delete("/delete", (req, res) => {
  res.send("delete request");
});

router.get("/course", async (req, res) => {
  try {
    const test = await UserModel.find({});
    res.json(test);
  } catch (err) {
    console.log(err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const { error, value } = NewSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const newData = await UserModel.create(req.body);
    res.send(newData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

router.get("/course/:id", async (req, res) => {
  const _id = req.params.id;
  UserModel.findById({ _id })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await UserModel.findByIdAndDelete(_id);
    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.json(deleteUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

router.put(`/updateCard/:id`, async (req, res) => {
  try {
    const { error, value } = NewSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const _id = req.params.id;
    const updateUser = await UserModel.findByIdAndUpdate({ _id: _id }, value);
    res.json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

router.post('/signup',async(req,res)=>{
  try{
      const user = await loginMethod.create({
          username:req.body.username,
          password:req.body.password
      })
      res.send(user)
  }catch(err){
      console.error(err)
  }

})
router.post('/login', async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = await loginMethod.findOne({ username, password });
      
      if (!user) {
          return res.status(401).json({ error: 'Invalid username / password' });
      }

      
      res.status(200).json({ user });
      
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/logout',(req,res)=>{
  res.clearCookie('username')
  res.clearCookie('password')

  res.status(200).json({message:'Logout succesful'})
})


module.exports = router;
