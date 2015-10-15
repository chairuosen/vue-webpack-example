var Vue = require('vue');
module.exports = {
    getRequestTest:function(){
        return Vue.http.get('/test');
    }
}