const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = require("./routers/route")
app.use(express.json());
mongoose.connect("mongodb+srv://rashmeetkaur:HZcSQCN6HFVNOZeo@cluster0.ng6niwf.mongodb.net/",
    {
      useNewUrlParser: true,
    }
)
.then(() => console.log("Connection with MongoDB is established."))
    .catch((error) => console.log(error));
app.use("/", route);
app.listen(3000,()=> {
  console.log("server started on port");
});





