import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { employee } from './models/employee.js';
import path from "path";

const app = express();
const port = 3000;

app.use(express.static('public'));
const conn = await mongoose.connect("mongodb://127.0.0.1:27017/company");


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// console.log(dirname);

const homefile = path.join(dirname, './public/index.html')

const names = ["Ahmad", "Muhammad", "Shoukat", "Mitho"];
const langs = ["Python", "Javascript", "Java", "C++"]
const city = ["Karachi", "Lahore", "Islamabad", "Bahawalpur"];


function random(input) {
    const randomvalue = Math.floor(Math.random() * input.length);
    return input[randomvalue];
}

// console.log(random(langs));

app.get("/", (req, res) => {
    res.sendFile(homefile)
})


// const firstDoc = await employee.findOne();



app.get('/generate', async (req, res) => {
    const count = await employee.countDocuments();
    if (count === 0) {

        for (let i = 0; i <= 9; i++) {

            const name = random(names)
            const salry = Math.floor(Math.random() *(30000 - 22000 + 1) + 22000)
            const spel = random(langs)
            const cit = random(city)
            const mange = (Math.random() > 0.5)?true:false; 

            const generate = await employee.create({
                name: name,
                salary: salry,
                language: spel,
                city: cit,
                isManager: mange
            })


        }
        res.send("Employees data added successfully")
    } else {
        res.send("Employee data is already in database")
    }
})

app.delete('/d', async (req, res) => {

    try {
        const count = await employee.countDocuments();
        if (!(count === 0)) {
            await employee.deleteMany();
            res.send("Data successfully deleted.")
        } else {
            res.send("Data already deleted")
        }

    } catch (error) {
        res.send(error)
    }
})


app.listen(port, () => {
    console.log('server running on' + port);
})
