const apiroot = "http://localhost:3000";

export function login(username, age, location, userID, accesstoken) {
    //username, age, location, userID, accesstoken
    return myFetch(apiroot + `/createUser`, "POST", { "name": username, "location": location, "age": age, "userID": userID, "accesstoken": accesstoken })
}       //url, storagetype, method , data
export function getUserInfo(userID) {
    return myFetch(apiroot, `/getuser`, "GET", { userID: userID });
}
export function addWalking(userID, distance){
    return myFetch(apiroot, `/addWalking`, "POST", {userID: userID, walked: distance});
}

export function addRunning(userID, distance){
    return myFetch(apiroot, `/addRunning`, "POST", {userID: userID, running: distance});
}

// function myFetch(url = ``, data = null) {
//     let options = {
//           cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//           credentials: "same-origin", // include, same-origin, *omit
//           headers: {
//               playerId: playerId
//           }
//     };
//     if(data){
//         options = { 
//           ...options,
//           method:  "POST", // *GET, POST, PUT, DELETE, etc.
//           headers: {
//               ...options.headers,
//               "Content-Type": "application/json; charset=utf-8",
//               // "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: JSON.stringify(data), // body data type must match "Content-Type" header
//         };
//     }
//     return fetch(url, options)
//     .then(response =>{
//       return response.json()
//     }); // parses response to JSON
// }
  
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


