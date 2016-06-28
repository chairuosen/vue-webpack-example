module.exports = function (router) {
    var defaultTitle = document.title;
    router.map(require('./route.js'));

    router.redirect({
        '*': '/'
    });

    var timer = 0;
    setInterval(function () {
        timer = 0;
    }, 1000);

    window.$router = router;

    router.beforeEach(function (transition) {
        var to = transition.to;
        timer++;
        if (timer >= 5) { // 路由频率限制。
            console.error('Too Many RouteChanges!');
            return;
        }
        console.log(" %c Route change: ", "font-weight:bold;", to.path);
        function changeTitle(title) { // 把网页内的title和浏览器title一起换。
            $rootScope.title = ( document.title = ( title || defaultTitle ) )
        }
        changeTitle(transition.to.title);
        transition.next();
    })

};