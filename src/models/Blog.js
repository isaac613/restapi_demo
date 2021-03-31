const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

blogSchema.set(`timestamps`, true);

module.exports = {
  Blog,
};
