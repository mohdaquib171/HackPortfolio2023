const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect("mongodb://127.0.0.1:27017/", () => {
    console.log("connected to db");
})

app.use(express.json());

const User = mongoose.model("user", new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true}
    }
))

app.post("/createAccount", (req, res) => {

})

app.listen(4000, () => {
    console.log("server is running");
})