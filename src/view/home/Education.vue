<template>
    <div id="Education" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("Education");
        var myChart = window.echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: "item",
            },
            legend: {
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 18,
                },
            },
            series: [
                {
                    name: "Access From",
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: false,
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
                        { value: 38, name: "博士" },
                        { value: 32, name: "硕士" },
                        { value: 30, name: "大学" },
                        { value: 28, name: "高中" },
                        { value: 26, name: "初中" },
                        { value: 22, name: "小学" },
                        { value: 18, name: "无" },
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