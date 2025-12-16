import mongoose, { SchemaType } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    salary: mongoose.Schema.Types.Decimal128,
    language: String,
    city: String,
    isManager: Boolean
})

const employee = mongoose.model('employee', schema);

export { employee }