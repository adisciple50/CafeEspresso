var {pollScript} = require("./js/utils");
var appConfig = require("./js/app/config-app.js");
require("./js/app/app.js");


if(appConfig.getFacebook){
    pollScript("FB", require("./js/facebook/initFb.js"))
}

if(appConfig.getInstafeed){
    pollScript("Instafeed", require("./js/instagram/initInstagram.js"))
}