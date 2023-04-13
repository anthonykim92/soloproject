const express = require('express');
const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


require("./config/mongoose.config");
require("./routes/person.routes")(app);

app.listen(port, () => console.log("Listening on Port", port));