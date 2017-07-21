//Instagram config
module.exports = {
    get: 'location',
    locationId: '156900194833233',
    template : '<div class="col-md-3 container-fluid" id="image-{{id}}"><img src="{{picture}}" href="{{link}}"></div>',
    target : '#instagram-gallery',
    clientId: '1c1c48d30d694bfa8244cc994ba4dae8',
    error(err){
        console.log("Instafeed:",new Error(err));
    },
    after(){
        console.log("Instagram loaded")
    }
}