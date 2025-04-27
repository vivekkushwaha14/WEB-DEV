import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb+srv://vivekkushwaha8654v:ErvP40numM8ns2vV@sigma.xkkcrnx.mongodb.net/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({  desc: "Description of the todo", isdone: false ,days:Math.floor(Math.random() * 45 +5* Math.random())})
    todo.save()
    res.send('Hello World!')
})
app.get('/a', async(req, res) => {
   let todo = await Todo.findOne({})
   console.log(todo)
   
   res.json({title: todo.title, desc:todo.desc})
   
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})