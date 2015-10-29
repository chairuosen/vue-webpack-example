<style>
    .icon-doge{
        width:200px;
        height:200px;
        background:url(../img/doge.jpg);
        background-size:100%;
    }
</style>
<template>
    <h2>{{title}}</h2>
    <p>id:{{$route.params.id}}</p>
    <div>Resolve:{{ test | json }}</div>
    <div>Loading:{{$loadingRouteData}}</div>
    <a v-link="{path:'/inner/'+test}">go</a>
</template>

<script>
    var testApi = require('../api/main.api.js');
    module.exports = {
        data:function(){
            return {
                title:'这是页面3',
                test:"empty"
            }
        },
        route:{
            // waitForData: true,
            data:function(transition){
                return {
                    test:testApi.getRequestTest(transition.to.params.id)
                }
            }
        }
    }
</script>