
// // uncomment when mozzila has its way
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// import {FB} from "//connect.facebook.net/en_GB/sdk.js";
// import * from "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";
// import * as {HANDLEBARS} from "http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js";
// import (facebook_settings,fbpage) from "app.js";

; // just to sort out dodgy script concats.

$.getScript("js/app.js");
$.getScript("https://cdn.jsdelivr.net/handlebarsjs/4.0.8/handlebars.min.js");

var fbfeed = fbpage + '/feed';
var template = Handlebars.compile( $("#gallery-tmpl").html() );
$(document).ready(function() {
    FB.init(facebook_settings); // initialise facebook api.
    FB.api(fbfeed,fbcover_pic(callback)); //returns an array of facebook "post" objects to "callback"
    FB.api(fbfeed,fbgallery(callback)); //returns an array of facebook "post" objects to "callback"
});

function fbcover_pic(callback) {
  // placeholder
  return False;
}

function fbgallery(callback){
  // placeholder
  return False;
}
