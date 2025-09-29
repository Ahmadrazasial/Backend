// const path = require("path");

import { dir } from "console";

import path from "path";

import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url)

const _dirname = path.dirname(_filename)
// let file = "mainpromise.js"

console.log(path.dirname(_dirname))

// console.log(path)

console.log(path.resolve("mainpromise.js"))

console.log(path.join("c:","path.js"))

console.log(path.parse(path.resolve("mainpromise.js")))



let mypath = "D:\\WD with Harry\\Backend\\fs & path module\\mainpromise.js";

let obj = {}

obj = path.parse(mypath)

console.log(obj)

console.log(path)

let object = {
    root:"d:\\",
    dir:"WD with Harry",
    base:"test.txt"
}

let direc = path.format(object)

console.log(direc)

console.log(path.normalize(mypath))

console.log(path.isAbsolute(mypath))

let urpath =  "\fs & path module\\mainpromise.js";
console.log(path.isAbsolute(urpath))