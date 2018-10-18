
class User {
     users = [];

    constructor(name, age, weight ){
        single_user = {"name": name, age: age, weight: weight};
        users.push(single_user);
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

    getAge(index, newAge){
        return user[index].age;
    }

    getWeight(index, newWeight){
        return user[index].weight;
    }

    findUser(name){
        //return index

        $.each(users, function(pos, val){
            if(val.name == name){
                return pos;
            }
        });

        return "User not found";
    }
}


module.exports = { 
    User
}
//how my data will be structured / request data from