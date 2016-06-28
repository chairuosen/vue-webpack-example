var Vue = require('vue');
var VueRouter = require('vue-router');
var jQuery = require('jquery');

window.$ = jQuery;
window.jQuery = jQuery;

Vue.use(VueRouter);
var router = new VueRouter({
    history: true,
    hashbang: false
});
require("./router.js")(router);
router.start(require('views/root'), 'body');