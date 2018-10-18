const express = require('express');
const { User} = require('./model');

var users = new User();

const app = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/getuser', function(req, res) {
    var username = req.param('username');
   
        index = users.findUser(username);
        if(index == null){
            res.send("user cannot be found"); 
        }
        else{
            res.send("Name: " + username + " Age: " + users.getAge(index)+ " Weight: " + users.getWeight(index));
        }
    
    
  });

  app.get('/getallusers', function(req, res) {
        temp = users.getAllUsers();
        
        for(let i = 0; i < temp.size(); i++){
            res.send("Name: " + temp[i].username + " Age: " + temp[i].getAge(index)+ " Weight: " + temp[i].getWeight(index));
        }
    
  });


  app.post('/createUser', function(req, res) {
    var username = req.body.id;
    var age = req.body.age;
    var weight = req.body.weight;

    if(users.createUser(username, age, weight)){
        res.send("success!");
    }

});
module.exports = app;










  //future ref: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters