
// // uncomment when mozzila has its way
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// import {FB} from "//connect.facebook.net/en_GB/sdk.js";
// import * from "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";
// import * as {HANDLEBARS} from "http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js";
// import (facebook_settings,fbpage) from "app.js";

; // just to sort out dodgy script concats.



var fbpage = '/156900194833233';
var fbfeed = fbpage + '/feed';
var template = Handlebars.compile( $("#social-tmpl").html() );
$(document).ready(function() {
    FB.init(facebook_settings); // initialise facebook api.
    FB.api(fbfeed,fbsocial_feed(callback)); //returns an array of facebook "post" objects to "callback" 
});


function fbsocial_feed(callback){
  $(callback).each(function(index, el) {
    $("#fbsocial").append(template({message:el['message'],picture_src:el['from']['picture'],name:el['from']['first_name']}));//render a template from the index.html <head>
  });
}
