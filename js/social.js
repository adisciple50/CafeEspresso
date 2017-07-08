import {FB} from "//connect.facebook.net/en_GB/sdk.js";
import * from "https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";
import * as {HANDLEBARS} from "http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js";

FB.init({
    appId            : '{1d38bb654a422b349b009f29697e4d2}',
    autoLogAppEvents : true,
    status           : true,
    xfbml            : true,
    version          : 'v2.9' // or v2.8, v2.7, v2.6, v2.5, v2.4, v2.3,
  });

var fbpage = '/156900194833233';
var fbfeed = fbpage + '/feed';
var template = Handlebars.compile( $("#tmpl").html() );

FB.api(fbfeed,fbsocial_feed(callback)); //returns an array of facebook "post" objects to "callback"

function fbsocial_feed(callback){
  $(callback).each(function(index, el) {
    $("#fbsocial").append(template({message:el['message'],picture_src:el['from']['picture'],name:el['from']['first_name']));
  });
}
