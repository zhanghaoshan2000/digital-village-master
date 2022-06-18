<template>
    <div style="display: flex; flex-direction: row">
        <shang-ping-zhong-lei style="height: 100%; wight: 50%" />
        <xiao-shou-zhong-lei style="height: 100%; wight: 50%" />
    </div>
</template>

<script>
import ShangPingZhongLei from "./ShangPingZhongLei.vue";
import XiaoShouZhongLei from "./XiaoShouZhongLei.vue";
export default {
    components: { ShangPingZhongLei, XiaoShouZhongLei },
};
</script>

<style scoped>
</style>