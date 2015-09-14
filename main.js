var Vue = require('vue');
var VueRouter = require('vue-router')
Vue.use(VueRouter);
var router = new VueRouter({
    history:true,
    hashbang:false
});
require("./route.js")(router);

var rootScope = Vue.extend(require('./page/root.vue'));
router.start(rootScope,'body');