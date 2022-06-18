<template>
    <div id="app"><DashBoard /></div>
</template>

<script>
import DashBoard from "./index.vue";

export default {
    name: "app",
    components: {
        DashBoard,
    },
};
</script>

<style lang="scss">
//全局字体以及位置
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #fff;
}
</style>
