var facebookSettings = require("./config-facebook.js");

module.exports = function(){
    console.log("Facebook loaded")
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
}