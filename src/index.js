const express = require('express')
require('./db/mongoose.js')
const Users = require('./models/users.js')
const Tasks = require('./models/tasks.js')
const User = require('./models/users.js')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.listen(port,()=>{
    console.log("server running on port "+port);
})


app.post('/users', async (req,res)=>{
    const user = new Users(req.body);
    try{
        user.save()
        res.status(201).send(user)
    }
    catch{
        res.status(400).send(e)
    }
})


app.get('/users',async (req,res)=>{
    try{
        const users= User.find({})
        res.status(201).send(users)
    }
    catch{
        res.status(500).send()
    }
})

app.get('/users/:id',async (req,res)=>{

    try{
        const user =User.findById(req.params.id);
        if(!user){
            return res.status(400).send()
        }
        res.status(201).send(user)
    }
    catch{
        res.status(500).send()
    }
    
})


app.post('/tasks',async (req,res)=>{
    const task = new Tasks(req.body);
    try{
        user.save()
        res.status(201).send(task)
    }
    catch{
        res.status(400).send(e)
    }
})

app.get('/tasks',async (req,res)=>{
    try{
        const tasks= Tasks.find({})
        res.status(201).send(tasks)
    }
    catch{
        res.status(500).send()
    }
})

app.get('/tasks/:id',async (req,res)=>{
    try{
        const task =Tasks.findById(req.params.id);
        if(!task){
            return res.status(400).send()
        }
        res.status(201).send(task)
    }
    catch{
        res.status(500).send()
    }
})

