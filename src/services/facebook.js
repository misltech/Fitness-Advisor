import * as storage from '@/services/storage';


window.fbAsyncInit = function () {
  FB.init({
    appId: '191023585134452',
    cookie: true,
    xfbml: true,
    version: 'v3.0'
  });
  FB.AppEvents.logPageView();

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export function FBLogin() {
  FB.login(function (response) {
    statusChangeCallback(response);
  }, { scope: 'email, user_birthday, user_location, public_profile' });
}

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
    FB.api('/me', function (res) {
      console.log(res.name);
      //currentUser = res;
        storage.login(res.name, null, null, response.authResponse.userID, response.authResponse.accessToken).then(function(response){
        console.log(response);
          console.log("attempt to create user ..done");
        //storage.setUserID(response.authResponse.userID);
        //storage.setAccessToken(response.authResponse.accessToken);
      });

    });
    //authResponse.userID
  } else {
    // The person is not logged into your app or we are unable to tell.
    //document.getElementById('status').innerHTML = 'Please log ' +
    //do something not sure what yet
   // alert("please log in");
    //this.$router.push("/");
  }
}
export function logmeout() {
  // eslint-disable-next-line
  return new Promise(function (resolve, reject) {
    FB.logout(function (response) { 
      console.log("signed out: " + response);
      resolve();
    });
  });
}

export function getStatus(){
  return new Promise(function(resolve, reject){
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        resolve(true);
      } else {
        reject(true);
      }
    });
   });
  }


export function getLocation() {
    // eslint-disable-next-line
  return new Promise(function(resolve, reject){
    FB.api('/me', { fields: 'location' }, function (response) {
      resolve(response.location);
    });
  })
  
}

export function getAge() {
  // eslint-disable-next-line
  return new Promise(function(resolve, reject){
    FB.api('/me', { fields: 'age_range' }, function (response) {
      console.log(response);
      resolve (response);
  });
  
  });
}

export function getProfilePicture() {
  // eslint-disable-next-line
  return new Promise(function(resolve, reject){
  FB.api('/me', { fields: 'profile_pic' }, function (response) {
    console.log(response);
    resolve(response);
  });
});
}
export function getName() {
  return new Promise(function(resolve, reject){
    FB.api('/me', function (res) {
      if(res != null){
        resolve(res.name);
      }
      else{
        reject(true);
      } 
    });
  })
}

