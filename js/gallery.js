
// // uncomment when mozzila has its way
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// import {FB} from "//connect.facebook.net/en_GB/sdk.js";
// import * from "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";
// import * as {HANDLEBARS} from "http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js";
// import (facebook_settings,fbpage) from "app.js";

; // just to sort out dodgy script concats.


var fbpage = '/156900194833233';
var fbfeed = fbpage + '/feed';
var fbpicture = fbpage + '/picture';
var template = Handlebars.compile( $("#gallery-tmpl").html() );
$(document).ready(function() {
    FB.init(facebook_settings); // initialise facebook api.
    FB.api(fbpicture,fbcover_pic(callback)); //returns an array of facebook "post" objects to "callback"
    FB.api(fbfeed,fbgallery(callback)); //returns an array of facebook "post" objects to "callback"
});

function fbcover_pic(callback) {
  picture = callback;
  url = picture.data.url;
  // placeholder
  console.log('url is' + url;);
  $("#cafe-img").attr("src",url);
  return False;
}

function fbgallery(callback){
  FB.api()
}
