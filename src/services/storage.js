const apiroot = "http://localhost:3003";
const axios = require('axios');

var accesstoken = null;
var currentID = null;

export function login(username, age, location, userID, accesstoken) {
    //username, age, location, userID, accesstoken
    if(accesstoken && currentID == null){
    setUserID(userID);
    setAccessToken(accesstoken);
    }
    return fetch(apiroot + "/createUser", "POST", { "name": username, "location": location, "age": age, "userID": userID, "accesstoken": accesstoken });
    
}
export function reqinfo(){
    return (apiroot, "/autocomplete");
}
export function autocomp(name){
    return fetch(apiroot, "/autocomplete", "GET", {"name": name});
}
//url, storagetype, method , data
export function getUserInfo(userID) {
    return fetch(apiroot + "/getuser", "GET", { "userID": userID });
}
export function addWalking(userID, distance) {
    return fetch(apiroot + "/addWalking", "POST", { "userID": userID, "distance": distance });
}

export function addRunning(userID, distance) {
    return fetch(apiroot + "/addRunning", "POST", { "userID": userID, "distance": distance });
}

// export function addFriend(userID, friendname, friendID) {
//     return fetch(apiroot + "/addfriend", "POST", { "userID": userID, "name": friendname, "friendID": friendID });
// }
export function addFriend(userID, friendname) {
    return fetch(apiroot + "/addfriend", "POST", { "userID": userID, "name": friendname});
}

export function getFriends(userID) {
    return fetch(apiroot + "/getfriends", "GET", { "userID": userID });
}

export function setAccessToken(token) {
    accesstoken = token;
}
export function getAccessToken() {
    return accesstoken;
}
export function setUserID(id){
    currentID = id;
}
export function getUserID(){
    return currentID;
}
function fetch(url, method, data) {
    if (method == "GET") {

       return axios.get(url , {headers: { data }});
    }
    else if(method == "POST"){
        return axios.post(url, {headers: { data }});
    }
}





