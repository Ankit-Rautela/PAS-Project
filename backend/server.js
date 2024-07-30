require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const connectDB = require("./utils/db");
const Users = require("./models/userModel");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

// Middleware for serving uploaded files
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/', async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

// Route for ticket submission
app.post('/api/tickets', upload.single('file'), async (req, res) => {
    const { text } = req.body;
    const filePath = req.file ? req.file.path : null;

    const newTicket = new Tickets({
        text,
        file: filePath,
    });

    try {
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = app;