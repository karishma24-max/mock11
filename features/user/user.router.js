const express=require("express")
const server = express();
const User = require("./user.model");
const argon2 = require("argon2");
const jwt=require('jsonwebtoken')

server.post("/signup", async (req, res) => {
    let { name, email, password } = req.body;
    const hash = await argon2.hash(password);
    try {
    
        let user = new User({
          name:name,
          email:email,
         password:hash,
        });
  
        const created_users = await user.save();
        res.send({  created_users });
      }
     catch (e) {
      res.status(404).send(e.message);
    }
  });

  
server.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  try {
    //let user = await User.findOne({ email });
    const user = await User.find({ email: req.body.email });
    if (await argon2.verify(user[0].password, req.body.password))
     {
        const token =jwt.sign({id:user._id,name:user.name,email:user.email,age:user.age,role:user.role},"secret89890")
     
        res.send({
          token:token,
          message:"login sucessful",
        });
      } else {
        res.status(401).send("Wrong Password");
      }
    
  } catch (error) {
    res.status(404).send(error.message);
  }
});
  module.exports = server;