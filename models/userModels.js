import mongoose from "mongoose";
import { type } from "os";

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["todo", "inprogress", "underreview", "finished"],
    },
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "urgent"],
    },
    deadline: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

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
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tasks" }],
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
const Tasks = mongoose.models.tasks || mongoose.model("tasks", tasksSchema);

export { User, Tasks };
