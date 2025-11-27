import mongoose from "mongoose";
import express from 'express';
import { Todo, User } from './models/Todo.js'



let con = await mongoose.connect('mongodb://localhost:27017/todo');

const app = express()
const port = 3000;

app.get('/', (req, res) => {

    const add = Todo.create({ title: "Server side", desc: "This application is running on backend", isDone: true })

    const todo = new Todo({ title: "Server side", desc: "This application is running on backend", isDone: true })
    todo.save()

    res.send("Hello World");


})

app.get('/user', (req, res) => {
    const user = new User({ title: "Ahmad", desc: "I live in uch sharif", isDone: false , age:23 });
    user.save();
    res.send(user.title + " is created")
})

app.listen(port, () => {
    console.log("Server running on port");
})

let string = "mongodb://localhost:27017/"

