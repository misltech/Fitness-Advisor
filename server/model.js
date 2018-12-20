
class User {
     
     
    constructor(){
       this.FitnessAdvisorUser = [];
    }

    createUser(name, age, location, userID, accesstoken){
        if(this.findUser(userID) == null){
        var single_user = {"name": name, "age": age,"location": location, "userID": userID, "accesstoken": accesstoken, "friends": [], "ExerciseData": {"Walking_Distance": null, "Running_Distance": null}};
        this.FitnessAdvisorUser.push(single_user);
        return true;
        }
        else{
            return false;
        }
    }

    getAllUsersData(){
        return this.FitnessAdvisorUser;
    }

    getAllUsername(){
        var test = ["Tahir", "Alyssa", "Sergio", "Moshe", "Tahirah"]; //will make up a test array so that user have something to work with
        var name = [];
        for(let i = 0; i < this.FitnessAdvisorUser.length; i++){  //for loop will simulate if it actually was in the database
            name.push(this.FitnessAdvisorUser[i].name);
        }
        //return name; //if this was actually to be done
        //test case 
        return test;
    }

    autocomplete(letters){
        var test = ["Tahir", "Alyssa", "Sergio", "Moshe", "Tahirah"]; //will make up a test array so that user have something to work with
        var name = [];
            //this.FitnessAdvisorUser.length *this should replace test*
        for(let i = 0; i < test.length; i++){  //for loop will simulate if it actually was in the database 
           // this.FitnessAdvisorUser[i].name *this should replace test*
            if(test[i].contains(letters))
            name.push(this.test[i]);
        }
        return test;
    }

    getUser(index){
        return this.FitnessAdvisorUser[index];
    }
    
    setName(index, newName){
        this.FitnessAdvisorUser[index].name = newName;
    }
    setAge(index, newAge){
        this.FitnessAdvisorUser[index].age = newAge;
    }
    
    getAge(index){
        return this.FitnessAdvisorUser[index].age;
    }

    findUser(userID){
        for(let u = 0; u < this.FitnessAdvisorUser.length; u++){
            if(this.FitnessAdvisorUser[u].userID == userID){
                return u;
            }
        }
        return null;
    }

    addWalkingDistance(index, data){
        if((!index == null)){
            this.FitnessAdvisorUser[index].ExerciseData.Walking_Distance += data;
            return true;
        }
    }
    addRunningDistance(index, data){
        if((!index == null)){
            this.FitnessAdvisorUser[index].ExerciseData.Running_Distance += data;
            return true;
        }  
    }

    addFriend(index, name, facebookid){
        if((!index == null)){
            let temp = {"Name": name, "FacebookID": facebookid}
            this.FitnessAdvisorUser[index].friends.push(temp);
            return true;
        }  
    }
    
    removeFriend(index, friend){
        for(let i = 0; i < this.FitnessAdvisorUser[index].friends.length; i++){
            if(this.FitnessAdvisorUser[index].friends[i].FacebookID == friend){
                this.FitnessAdvisorUser[index].friends.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

module.exports = { 
    User
}
//how my data will be structured / request data from