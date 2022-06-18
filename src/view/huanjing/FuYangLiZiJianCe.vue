<template>
    <div id="fuyanglizi" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("fuyanglizi");
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
                boundaryGap: false,
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
                name: "水质等级",
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
                    data: [8.2, 9.32, 9.01, 9.34, 7.29, 5.33, 8.32],
                    type: "line",
                },
            ],
        };

        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>