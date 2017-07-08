import {FB} from "//connect.facebook.net/en_GB/sdk.js";
import * from "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";
import * as {HANDLEBARS} from "http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js";
import (facebook_settings,fbpage) from "app.js";
;



var fbfeed = fbpage + '/feed';
var template = Handlebars.compile( $("#gallery-tmpl").html() );
$(document).ready(function() {
    FB.init(facebook_settings); // initialise facebook api.
    FB.api(fbfeed,fbsocial_feed(callback)); //returns an array of facebook "post" objects to "callback"
});
