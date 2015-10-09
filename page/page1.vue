<style lang="less">
    h1{
        color:red;
    }
    h2{
        color:blue;
    }
</style>
<template>
    <h2 v-on="click:a();">{{title}}</h2>
</template>

<script>
    module.exports = {
        data:function(){
            return {
                title:'This is page 1'
            }
        },
        methods:{
            a:function(){
                this.$dispatch('alert',this.title);
            }
        }
    }
</script>