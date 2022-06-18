<template>
    <div id="shigutongji" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("shigutongji");
        var myChart = window.echarts.init(chartDom);
        var option;

        option = {
            color: [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc",
            ],
            tooltip: {
                trigger: "item",
            },
            legend: {
                orient: "vertical",
                left: "5%",
                top: "10%",
                textStyle: {
                    color: "#ffffff",
                },
            },
            textStyle: {
                color: "#fff",
            },
            series: [
                {
                    name: "事故统计",
                    type: "pie",
                    radius: "50%",
                    data: [
                        { value: 3, name: "洪灾" },
                        { value: 12, name: "漏电" },
                        { value: 1, name: "燃爆" },
                        { value: 1, name: "火灾" },
                        { value: 8, name: "其他" },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };

        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>