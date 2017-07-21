var appConfig = {
    /**
     * Advanced logging
    */
    debug:true,
    getFacebook:false,
    getInstafeed:true
}

if(appConfig.debug){
    console.log("App Config:")
    console.log(JSON.stringify(appConfig, null, "\t"));
}

module.exports = appConfig;