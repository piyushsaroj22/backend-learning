const express = require('express');
const app = (express());

const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', function (req,res){
    res.send("hey");
});

app.get('/create', async function (req,res){
    let user = await userModel.create({
        username: "piyush",
        age:20,
        email: "piyush@gmail.com"
    })
    res.send(user);
});

app.get('/post/create', async function (req,res){
    let post = await postModel.create({
        postdata: "hello mera naam piyush saroj hai aap kese ho",
        user: "69bd40f03e8073ae5c092869"
    })
    let user = await userModel.findOne({_id: "69bd40f03e8073ae5c092869"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
});

app.listen(3000);








