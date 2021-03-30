require(".db/connection");

const express = require("express");

const port = process.env.PORT || 5001;
// init instance of express
const app = express();

app.get("/user", async (req, res) => {
  try{
      const allUsers = await User.find({});
      res.send(allUsers);
  } catch(error){
      res.send(error)
  }
});

app.post("/user", (req, res) => {
    try{
        const user = new User (req.body);
        const returnedValue = await user.save();
        res.send(`successfully added ${returnedValue.name}`)
    }catch(error){
        res.send(error)
    }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
