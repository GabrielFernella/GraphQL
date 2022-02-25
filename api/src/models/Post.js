import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, // id gerado pelo mongoose
    ref: 'User',
    required: true
  },
})

export default mongoose.model('Post', Schema)