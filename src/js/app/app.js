var {pollScript} = require("../utils");
var configApp = require("./config-app");

//App settings
var debug = configApp.debug;

//for ease of use I have setup template from the Global window object, call template() instead of Handlebars.template or window.Handlebars.template (same thing)
var template = window.Handlebars.template;


var access_token = '1d38bb6549a422b349b009f29697e4d2';
var fbpage = '156900194833233';
var endpoints = {
  //add your endpoints here as getters
  get feed(){
    return fbpage+"/feed";
  }
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
