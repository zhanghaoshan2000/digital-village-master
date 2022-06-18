<template>
    <div id="xiaoliangtongji" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("xiaoliangtongji");
        var myChart = window.echarts.init(chartDom);
        var option;

        option = {
            textStyle: {
                color: "#fff",
            },
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
            grid: {
                // show: true,
                // containLabel: true,
                top: "15%",
                bottom: "12%",
                left: "10%",
                right: "7%",
            },

            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
            legend: {
                data: ["食品", "居家百货", "鞋帽", "家装家纺", "家具"],
                textStyle: {
                    color: "#fff",
                },
                top: "5%",
            },

            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
            ],
            yAxis: [
                {
                    type: "value",
                },
            ],
            series: [
                {
                    name: "食品",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: "居家百货",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: "鞋帽",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                    name: "家装家纺",
                    type: "line",
                    stack: "Total",
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                    name: "家具",
                    type: "line",
                    stack: "Total",
                    label: {
                        show: true,
                        position: "top",
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: "series",
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ],
        };

        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>