require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const Users = require("./models/userModel");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

app.post('/', async(req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

module.exports = app;