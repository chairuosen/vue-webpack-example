var Vue = require('vue');
module.exports = function(router){
    router.map({
        '/': {
            component: function(resolve){
                require(['./page/page1.vue'],resolve);
            }
        },
        '/inner':{
            component: function(resolve){
                require(['./page/page2.vue'],resolve);
            }
        },
        '/inner/:id':{
            component: function(resolve){
                require(['./page/page3.vue'],resolve);
            }
        }
    });

};