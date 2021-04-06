require("./db/connection");
const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/users");
const { postRouter } = require("./routes/posts");

const port = process.env.PORT || 5001;
// init instance of express
// middleware
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(postRouter);

// routes/endpoints
app.get("/health", (req, res) => {
  res.send({ message: "API is working correctly" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
