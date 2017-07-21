//for ease of use I have setup template from the Global window object, call template() instead of Handlebars.template or window.Handlebars.template (same thing)
var template = window.Handlebars.template;


const access_token = '1d38bb6549a422b349b009f29697e4d2';
var fbpage = '156900194833233';
var endpoints = {
  //add your endpoints here as getters
  get feed(){
    return fbpage+"/feed";
  }
}
var facebookSettings = {
    appId            : '139288266642775', //TODO THIS APP ID IS WRONG
    autoLogAppEvents : true,
    status           : true,
    xfbml            : true,
    version          : 'v2.9' // or v2.8, v2.7, v2.6, v2.5, v2.4, v2.3,
}


// What to load when document object model is loaded.
// 1 CREATE FB SCRIPT TAG DYNAMICLY TO START LOADING API - this allows FB init script to load EG.. initApp()
window.addEventListener("DOMContentLoaded",function(){

  //I am patching without a server so to ensure it runs in real life I will get the origin and fix the js src origin acordingly.
  var origin = location.origin === "file://" ? "https:":"";
  var lang = "en_US";

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = origin+"//connect.facebook.net/"+lang+"/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   //now that the script tag is appended in the body lets run the callback bellow
})
//Init app is going to be attached to Global space and called instead of FBs code
//We want to keep things in JS and not inline if posible.
window.initApp = function(){
  //FB is being an ass pain so lets poll for when it is defined!
  var pollInterval = 100; //ms
  var FbPoll = setInterval(function(){ // check to see if the FB libray is loaded every 100 ms.
    var tries = 0;
    if("FB" in window && "instagramfeed" in window){
      clearTimeout(FbPoll);
      appOnInit();
    }
    else{
      tries++
      if(tries===10){
        clearTimeout(FbPoll);
        console.log("FACEBOOK cannot be loaded for some reason. please check your console, facebook settings and DOMContentLoaded for tracing.")
      }
    }
  }, pollInterval)
}


var debug = true;

/**
 * THE MAIN BIT YOUR CODE GOES HERE
 */
function appOnInit(){  //document ready ;)
  //DO STUFF HERE
  FB.init(facebookSettings);
  FB.AppEvents.logPageView();

 // begin login .. beware popup blocker.
  FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  });

  // check login status  - https://developers.facebook.com/docs/facebook-login/web#logindialog
  FB.getLoginStatus(function(response) {
    if(response.status === 'connected') {
      console.log(response.authResponse.accessToken);
    }
    console.log(response);
  });




  //helpful hints
  if(debug){
    console.log("Running in debug mode, see useful info bellow.")
    console.log("APP: ",JSON.stringify(Object.assign(
      facebookSettings,
      endpoints,
      {facebookPage: fbpage}
    ), null, "\t"))
  }

  //CALLS
  //returns an array of facebook "post" objects to "callback"
  FB.api( endpoints.feed,{access_token:'1b02d3c8312abb42be267cadd63570c5'}, fbsocialFeed );

  //DEFINE HELPERS
  function fbsocialFeed(callback) {
    FB.Event.subscribe('auth.authResponseChange', function(callback){
      console.log(callback);
    });
    FB.Event.subscribe('auth.statusChange', function(callback){
      console.log(callback);
    });


    //TEMPLATING
    $(callback).each(function (index, item) {
      if("error" in item){
        if(debug){
          console.log("FB Social has sent an error instead of a bunch of data! check your page id, app id, online status. what is stoping data?")
          console.log(callback);
        }
      }
      else{
        var fbSocialFeedContext = {
          message: item['message'],
          picture_src: item['from']['picture'],
          name: item['from']['first_name']
        }
        if(debug){ console.log( template(fbSocialFeedContext) ) }

        //template is defined at top of this script, see this for Handlebars details and how globals work.
        $("#fbsocial").append( template(fbSocialFeedContext) );//render a template from the index.html <body>
        }
    });
  }
  // begin instagram backup gallery
  // window.Instafeed = require("instafeed");
  window.instagramfeed = new Instafeed({
          get: 'location',
          locationId: '156900194833233',
          template : $('#gallery-tmpl').html(),
          clientId: '1c1c48d30d694bfa8244cc994ba4dae8',
      });
      // d.run();

}
