const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    file: {
        type: String,
    }
}, { timestamps: true });

const Tickets = mongoose.model("tickets", ticketSchema);

module.exports = Tickets;
