const express = require('express');
const app = express();
const userModel = require("./models/user");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', function (req, res) {
    res.render("index")
})

app.post('/register', async function (req, res) {
    let {username, name, age, email, password} = req.body;

    let user = await userModel.findOne ({email});
    if(user) return res.status(500).send("user already register");

    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(password, salt, async (err, hash)=>{
            let user = await userModel.create({
                username,
                name,
                age,
                email,
                password: hash
            });
        });
    });
});

app.listen(3000);











