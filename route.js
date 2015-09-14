var Vue = require('vue');
module.exports = function(route){
    route.map({
        '/': {
            component: Vue.extend(require('./page/page1.vue'))
        },
        '/inner':{
            component: Vue.extend(require('./page/page2.vue'))
        },
        '/inner/:id':{
            component: Vue.extend(require('./page/page2.vue'))
        }
    });

};