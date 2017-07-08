// mozila and others import script in the style of ye olde html 3
import("jquery/src/jquery.js");
import * as FB from "facebook/sdk.js";
$(document).ready(
    load_facebook();
});

FB.

function load_facebook(){
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '{1d38bb654a422b349b009f29697e4d2}',
        version: 'v2.7' // or v2.1, v2.2, v2.3, ...
      });
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });

}
