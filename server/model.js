
class User {
     
     
    constructor(){
       this.users = [];
    }

    createUser(name, age, location, userID, accesstoken){
        if(this.findUser(userID) == null){
        let single_user = {"name": name, "age": age,"location": location, "userID": userID, "accesstoken": accesstoken, "friends": [{"Name": null, "FacebookID": null}], "ExerciseData": [{"Walking_Distance": null, "Running_Distance": null}]};
        this.users.push(single_user);

        return true;
        }
        else{
            return false;
        }
    }

    getAllUsers(){
        return this.users;
    }

    setName(index, newName){
        this.user[index].name = newName;
    }
    setAge(index, newAge){
        this.user[index].age = newAge;
    }
    
    getAge(index){
        return this.user[index].age;
    }

    findUser(userID){
        $.each(this.users, function(pos, val){
            if(val.userID == userID){
                return pos;
            }
        });
        return null;
    }

    addWalkingDistance(index, data){
        if((!index == null)){
            this.user[index].ExerciseData.Walking_Distance += data;
        }
    }
    addRunningDistance(index, data){
        if((!index == null)){
            this.user[index].ExerciseData.Running_Distance += data;
        }  
    }
}

module.exports = { 
    User
}
//how my data will be structured / request data from