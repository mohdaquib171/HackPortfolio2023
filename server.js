const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const port = 3300;
const saltRounds = 10;

function createUser(username, password) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return err;
        }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return err
            }
            storeUserIntoDatabase(username, hash, salt);
        })
    })
}

function storeUserIntoDatabase(username, password, salt) {
    let newUser = new User(
        {
            username: username,
            password: password,
            salt: salt
        })
    newUser.save();
    return;
}

mongoose.connect("mongodb://127.0.0.1:27017/")
.then( () => {
    console.log("connected to db");
})

app.use(express.json());
app.use(express.static("public_html"));

const User = new mongoose.model("user", new mongoose.Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
    }
))

app.post("/api/createAccount", (req, res) => {
    createUser(req.body.username, req.body.password);
    res.send("nice");
})

app.post("/api/login", (req, res) => {
    User.findOne( {username: req.body.username} )
    .then( (response) => {
        bcrypt.compare(req.body.password, response.password, (err, isPassword) => {
            //store session as jwt or cookie
        })
    })
})

app.listen(port, () => {
    console.log("server is running on port " + port);
})