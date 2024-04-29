const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const Usermodel = require('./models/User')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/users");


// for Login

app.post('/login', (req,res) => {
    const {email, password} = req.body;
    Usermodel.findOne({email: email})
    .then(user => {
        if(user){
            if (user.password === password){
                res.json("Success")
            }
            else{
                res.json("Password is correct")
            }
        }
        else{
            res.json("No record existed")

    }
    })
})



// for register 

app.post('/register', (req,res) => {
    Usermodel.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})