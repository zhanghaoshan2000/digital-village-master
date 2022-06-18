<template>
    <div id="xiaoshouzhonglei" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("xiaoshouzhonglei");
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
                // top: "20%",
                // bottom: "1%",
                // left: "20%",
                // right: "3%",
            },
            tooltip: {
                trigger: "item",
            },
            title: {
                text: "销售种类统计",
                textStyle: { color: "#fff", fontSize: "120%" },
                left: "center",
                top: "3%",
            },
            legend: {
                orient: "vertical",
                top: "5%",
                left: "5%",
                textStyle: {
                    color: "#fff",
                },
            },
            series: [
                {
                    name: "销售种类统计",
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: "#ffffff0",
                        borderWidth: 2,
                    },
                    label: {
                        show: false,
                        position: "center",
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: "40",
                            fontWeight: "bold",
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        { value: 1048, name: "食品" },
                        { value: 735, name: "居家百货" },
                        { value: 580, name: "鞋帽" },
                        { value: 484, name: "家装家纺" },
                        { value: 300, name: "家具" },
                    ],
                },
            ],
        };

        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>