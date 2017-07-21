module.exports = {
    pollScript(globalName, callback) {
        var pollInterval = 100; //ms
        var FbPoll = setInterval(function () { // check to see if the FB libray is loaded every 100 ms.
            var tries = 0;
            // if("FB" in window && "instagramfeed" in window){
            if (globalName in window) {
                clearTimeout(FbPoll);
                callback();
            }
            else {
                tries++
                if (tries === 10) {
                    console.log(10 + " attempts to load " + globalName + " bailing out.")
                    clearTimeout(FbPoll);
                }
            }
        }, pollInterval)
    }
}