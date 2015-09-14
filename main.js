var Vue = require('vue');
var VueRouter = require('vue-router')
Vue.use(VueRouter);
var router = new VueRouter();


var rootScope = Vue.extend(require('./page/root.vue'));

router.map({
    '/': {
        component: Vue.extend(require('./page/page1.vue'))
    },
    '/inner':{
        component: Vue.extend(require('./page/page2.vue'))
    }
})
router.start(rootScope,'body');