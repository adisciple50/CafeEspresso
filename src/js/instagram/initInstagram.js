
var instagramSettings = require("./config-instagram.js");

module.exports = function(){
  console.log("loading instagram")
  var instagramfeed = new Instafeed(instagramSettings);
  
  instagramfeed.run();
}