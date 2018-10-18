
class User {
     users = [];
     
    constructor(){
       // single_user = {"name": "", age: null, weight: null};
       // users.push(single_user);
    }

    createUser(name, age, weight ){
        single_user = {"name": name, age: age, weight: weight, friends:[], friendsallowed: false, ExerciseData:[]};
        users.push(single_user);

        return true;
    }

    getAllUsers(){
        return users;
    }

    setName(index, newName){
        user[index].name = newName;
    }
    setAge(index, newAge){
        user[index].age = newAge;
    }
    setWeight(index, newWeight){
        user[index].weight = newWeight;
    }

    getAge(index){
        return user[index].age;
    }

    getWeight(index){
        return user[index].weight;
    }

    findUser(name){
        //return index

        $.each(users, function(pos, val){
            if(val.name == name){
                return pos;
            }
        });

        return null;
    }
}

class ExerciseData {
    constructor(){

    }

    //create new excersize type
    //add to excersize, time spent excersizing
    //
}


module.exports = { 
    User, ExcerciseData
}
//how my data will be structured / request data from