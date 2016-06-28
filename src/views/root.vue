<template>
    <router-view></router-view>
</template>

<script>
    module.exports = {
        replace: false,
        ready:function () {
            window.$rootScope = this;
        }
    };
</script>