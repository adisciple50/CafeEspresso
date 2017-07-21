//Instagram config
var instagramConfig = {
    get: 'location',
    locationId: '156900194833233',
    template : '<div class="col-md-3 container-fluid" id="image-{{id}}"><img src="{{picture}}" href="{{link}}"></div>',
    target : '#instagram-gallery',
    clientId: '1c1c48d30d694bfa8244cc994ba4dae8',
    accessToken:"6a307d2e5d7d44c8aac70c10d67e0777",
    error:(err)=>{
        console.log(instagramConfig)
        console.log("Instafeed:",new Error(err));
    },
    after(){
        console.log("Instagram loaded")
    }
}

module.exports = instagramConfig;