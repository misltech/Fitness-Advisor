const apiroot = "http://localhost:3000";
export var accesstoken = null;

import $ from 'jquery'
window.$ = $;

export function login(username, age, location, userID, accesstoken) {
    //username, age, location, userID, accesstoken
    return myFetch(apiroot + `/createUser`, "POST", { "name": username, "location": location, "age": age, "userID": userID, "accesstoken": accesstoken })
}       //url, storagetype, method , data
export function getUserInfo(userID) {
    return myFetch(apiroot, `/getuser`, "GET", { "userID": userID });
}
export function addWalking(userID, distance){
    return myFetch(apiroot, `/addWalking`, "POST", {"userID": userID, "walked": distance});
}

export function addRunning(userID, distance){
    return myFetch(apiroot, `/addRunning`, "POST", {"userID": userID, "running": distance});
}

export function addFriend(userID, friendname, friendID){
    return myFetch(apiroot, `/addfriend`, "POST", {"userID": userID, "name": friendname, "friendID": friendID});
}
export function getFriends(userID){
    return myFetch(apiroot, `/getfriends`, "GET", {"userID": userID});
}

export function setAccessToken(token){
    accesstoken = token;
}
export function getAccessToken(){
    return accesstoken;
}
 function myFetch(url, storagetype, method, data) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url + storagetype,
        "method": method,
        "headers": {
            data
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        if(method == "POST"){   //just return true for POSTS
            if (response == false) {
                return false;
            }
            else {
                return true;
            }

        }
        else{   //RETURN DATA FOR GETS
            return response;
        }
        
    });

}


