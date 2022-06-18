<template>
    <div id="allmap"></div>
</template>
<style>
#allmap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
}
</style>
<script>
window.loadMP = function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
        "https://api.map.baidu.com/api?type=webgl&v=1.0&ak=3H6AdGznSsr5CC85chFOlDFfFdioL4Gr&callback=initMP";
    document.body.appendChild(script);
};
window.initMP = function () {
    var map = new BMapGL.Map("allmap"); // 创建Map实例
    var point = new BMapGL.Point(120.9617, 28.12404); // 创建点坐标
    map.centerAndZoom(point, 13);
    map.enableScrollWheelZoom();
};

export default {
    mounted: function () {
        window.loadMP();
    },
};
</script>

