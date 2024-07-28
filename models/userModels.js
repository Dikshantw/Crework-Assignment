import mongoose from "mongoose";
import { type } from "os";

const tasksSchema = new mongoose.Schema({
  title: {
    type: string,
    required: true,
  },
  status: {
    type: string,
    required: true,
    enum: ["todo", "inprogress", "underreview", "finished"],
  },
  priority: {
    type: string,
    required: true,
    enum: ["low", "medium", "urgent"],
  },
  deadline: {
    type: Date,
    required: true,
  },
  description: {
    type: string,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [tasksSchema],
});

const User = mongoose.models.users || mongoose.models("users", userSchema);

export default User;
