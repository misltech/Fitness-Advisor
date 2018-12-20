const express = require('express');
const {User} = require('./model');

var users = new User();

const app = express.Router();

app.get('/getuser', function(req, res) {
    let userID = req.get('userID');
    let index = users.findUser(userID);
        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            res.send(users.getUser(index));
        }
  });

  app.get('/allusers', function(req, res) {
        res.send(users.getAllUsers());
  });

  app.post('/createUser', function(req, res) {
    let username = req.get('name');
    let age = req.get('age');
    let location = req.get('location');
    let userID = req.get('userID');
    let accesstoken = req.get('accesstoken');
    //name, age, location, userID, accesstoken
    //console.log(username, age, location, userID, accesstoken);
    let r = users.createUser(username, age, location, userID, accesstoken);
    if(r){
        res.send(true);
    }
    else{
        res.send("user already exist");
    }  
   
});

app.post('/addWalking', function(req, res) {
    let userID = req.get('userID');
    let data = req.get('distance');
    let index = users.findUser(userID);

        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
           if(users.addWalkingDistance(index, data))
            res.send(true);
        }
});

app.post('/addRunning', function(req, res) {

    let userID = req.get('userID');
    let data = req.get('distance');
    let index = users.findUser(userID);

        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
           if(users.addRunningDistance(index, data))
            res.send(true);
        }
});

app.post('/addfriend', function(req, res) {

    let userID = req.get('userID');
    let name = req.get('name');
    //var friendID = req.get('friendID');
    let index = users.findUser(userID);

        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            if(users.addFriend(index, name, null)){
                res.send(true);
            }
            else{
                res.send(false);
            }   
        }
});

app.get('/getfriends', function(req, res) {
    let userID = req.get('userID');
    let index = users.findUser(userID);
    res.send(users.getUser(index).friends);
});

module.exports = app;
//future ref: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters