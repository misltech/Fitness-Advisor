const express = require('express');
const {User} = require('./model');

var users = new User();

const app = express.Router();

app.get('/getuser', function(req, res) {
    var userID = req.get('userID');
   
        index = users.findUser(userID);
        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            res.send(user[index]);
        }
  });

  app.get('/allusers', function(req, res) {
        res.send(users.users);
  });

  app.post('/createUser', function(req, res) {
    var username = req.get('name');
    var age = req.get('age');
    var location = req.get('location');
    var userID = req.get('userID');
    var accesstoken = req.get('accesstoken');
    //name, age, location, userID, accesstoken
    console.log(username, age, location, userID, accesstoken);
    if(users.createUser(username, age, location, userID, accesstoken)){
        res.send(true);
    }
    else{
        res.send("user already exist");
    }  
   
});

app.post('/addWalking', function(req, res) {
    var username = req.get('userID');
    var data = req.get('distance');
        index = users.findUser(username);
        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            user.addWalkingDistance(index, data);
            res.send(true);
        }
});

app.post('/addRunning', function(req, res) {

    var username = req.get('userID');
    var data = req.get('distance');
        index = users.findUser(username);
        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            user.addRunningDistance(index, data);
            res.send(true);
        }
});

app.post('/addfriend', function(req, res) {

    var username = req.get('userID');
    var name = req.get('name');
    var friendID = req.get('friendID');

    index = users.findUser(username);
        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            if(user.addfriend(index, name, friendID)){
                res.send(true);
            }
            else{
                res.send(false);
            }   
        }
});

app.get('/getfriends', function(req, res) {
    var username = req.get('userID');
    index = users.findUser(username);
    res.send(users.users[index]);
});


module.exports = app;










  //future ref: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters