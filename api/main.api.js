var Vue = require('vue');
var rsvp = require('rsvp');
var http = Vue.http;
module.exports = {
    getRequestTest:function(){
        // return http.get('/test');
        return new Promise(function (resolve,reject) {
            setTimeout(function(){
                reject();
            },1000)
        })
    }
}