var Vue = require('vue');
var rsvp = require('rsvp');
var http = Vue.http;
module.exports = {
    getRequestTest:function(id){
        // return http.get('/test');
        return new Promise(function (resolve,reject) {
            setTimeout(function(){
                resolve(2*id);
            },1000)
        })
    }
}