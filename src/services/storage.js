const apiroot = "http://localhost:3003";

const axios = require('axios');

export var accesstoken = null;

export function login(username, age, location, userID, accesstoken) {
    //username, age, location, userID, accesstoken
    return myFetch(apiroot + `/createUser`, "POST", { "name": username, "location": location, "age": age, "userID": userID, "accesstoken": accesstoken })
}       //url, storagetype, method , data
export function getUserInfo(userID) {
    return myFetch(apiroot + "/getuser", "GET", { "userID": userID });
}
export function addWalking(userID, distance) {
    return myFetch(apiroot + "/addWalking", "POST", { "userID": userID, "walked": distance });
}

export function addRunning(userID, distance) {
    return myFetch(apiroot + "/addRunning", "POST", { "userID": userID, "running": distance });
}

export function addFriend(userID, friendname, friendID) {
    return myFetch(apiroot + "/addfriend", "POST", { "userID": userID, "name": friendname, "friendID": friendID });
}
export function getFriends(userID) {
    return myFetch(apiroot + "/getfriends", "GET", { "userID": userID });
}

export function setAccessToken(token) {
    accesstoken = token;
}
export function getAccessToken() {
    return accesstoken;
}
function myFetch(url, method, data) {
    if (method == "GET") {

        axios.get(url , {
            headers: {
                data
            }
        })
    }
    else {

        axios.post(url, {
            headers: {
                data
            }
        })
    }

}
//});




