var Vue = require('vue');
var VueRouter = require('vue-router')
Vue.use(VueRouter);
var router = new VueRouter();


var rootScope = Vue.extend(require('./page/root.vue'));

router.map(require("./route.js"));
router.start(rootScope,'body');