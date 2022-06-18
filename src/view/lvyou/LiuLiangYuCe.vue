<template>
    <div id="yuce" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("yuce");
        var myChart = window.echarts.init(chartDom);
        var option;
        option = {
            color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
            tooltip: {
                trigger: "item",
            },
            legend: {
                orient: "horizontal",
                left: "3%",
                top: "3%",
                textStyle: {
                    color: "#ffffff",
                },
            },
            grid: {
                x: "25%",
                y: 45,
            },
            textStyle: {
                color: "#fff",
            },
            series: [
                {
                    name: "Access From",
                    type: "pie",
                    radius: "50%",
                    data: [
                        { value: 1048, name: "洪灾" },
                        { value: 735, name: "漏电" },
                        { value: 580, name: "燃爆" },
                        { value: 484, name: "火灾" },
                        { value: 300, name: "其他" },
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