import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  desc:String,
  isDone:Boolean
});

  const Todo = mongoose.model('Todo',TodoSchema);
const User = mongoose.model('User',TodoSchema);

export {Todo,User}
