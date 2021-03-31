require("./db/connection");
const express = require("express");
const { User } = require("./models/User");
const { Blog } = require("./models/Blog");

const port = process.env.PORT || 5001;
// init instance of express
const app = express();

app.use(express.json());

app.get("/user", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
    });
    const returnedValue = await user.save();
    res.status(201).send(`successfully added ${returnedValue.name}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get(`/blog`, async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    res.status(200).send(allBlogs);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
});

app.delete("/user.:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
