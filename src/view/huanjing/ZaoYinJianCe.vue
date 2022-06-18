<template>
    <div id="zaoyinjiance" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("zaoyinjiance");
        var myChart = window.echarts.init(chartDom);
        var option;

        option = {
            color: "#fff",
            grid: {
                containLabel: true,
                top: "25%",
                bottom: "8%",
                left: "5%",
                right: "5%",
            },
            xAxis: {
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
            yAxis: {
                name: "噪音等级",
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
            series: [
                {
                    data: [8.2, 9.32, 9.01, 9.34, 4.29, 6.33, 7.32],
                    type: "line",
                    smooth: true,
                },
            ],
        };

        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>