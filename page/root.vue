<style lang="less">
    nav{
        a{
            color:green;
        }
    }
</style>
<template>
    <header><h1>{{title}}</h1></header>
    <nav>
        <a v-link="{path:'/'}">page1</a>
        <a v-link="{path:'/inner'}">page2</a>
    </nav>
    <router-view></router-view>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                title:"Main Title"
            }
        }
    }
</script>