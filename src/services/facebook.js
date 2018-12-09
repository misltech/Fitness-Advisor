import * as storage from '@/services/storage';
var currentUser = null;

window.fbAsyncInit = function() {
  FB.init({
    appId      : '191023585134452',
    cookie     : true,
    xfbml      : true,
    version    : 'v3.0'
  });
  FB.AppEvents.logPageView(); 
  
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 export function FBLogin(){
  FB.login(function(response) {
    statusChangeCallback(response);
  }, {scope: 'email, user_birthday, user_location, public_profile'});
}

// function statusChangeCallback(response){
//   console.log(response);
//   FB.api("/me?fields=name,email,birthday,picture", me => {
//    console.log(me);
//    storage.Login(me.name, response.authResponse.userID, response.authResponse.accessToken).then(function(s){
//     console.log(s); 
//    })
//   })
// }

function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    //username, age, location, userID, accesstoken
    FB.api('/me', function(res) {
      console.log( res.name);
      currentUser = res;
      storage.login(res.name, null, null, res.authResponse.userID, res.authResponse.accessToken)
    });

  } else {
    // The person is not logged into your app or we are unable to tell.
    //document.getElementById('status').innerHTML = 'Please log ' +
   //do something not sure what yet
  }
}

export function logmeout(){
  FB.logout(function(response) {
    // Person is now logged out
    console.log(response);
    currentUser = null;
 });
}

export function getStatus(){
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      return true;
    } else {
    return false;
    }
  });


}

