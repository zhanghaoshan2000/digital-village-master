<template>
    <div id="renshubianhua" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("renshubianhua");
        var myChart = window.echarts.init(chartDom);
        var option;
        option = {
            color: "#4295f0",
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            grid: {
                containLabel: true,
                top: "25%",
                bottom: "8%",
                left: "5%",
                right: "5%",
            },
            xAxis: [
                {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    axisTick: {
                        alignWithLabel: true,
                        color: "#fff",
                    },
                    axisLabel: {
                        color: "#fff",
                        textStyle: {
                            color: "#fff",
                        },
                    },
                },
            ],
            yAxis: [
                {
                    name: "人数",
                    nameTextStyle: {
                        color: "#fff",
                    },
                    type: "value",
                    axisLabel: {
                        textStyle: {
                            color: "#fff",
                        },
                    },
                },
            ],
            series: [
                {
                    name: "Direct",
                    type: "bar",
                    barWidth: "60%",
                    data: [10, 52, 200, 334, 390, 330, 220],
                },
            ],
        };
        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>