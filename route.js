var Vue = require('vue');
module.exports = {
    '/': {
        component: Vue.extend(require('./page/page1.vue'))
    },
    '/inner':{
        component: Vue.extend(require('./page/page2.vue'))
    }
};