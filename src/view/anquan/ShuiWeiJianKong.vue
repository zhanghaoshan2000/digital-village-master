<template>
    <div id="shuiweijiankong" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("shuiweijiankong");
        var myChart = window.echarts.init(chartDom);
        var option;

        option = {
            grid: {
                containLabel: true,
                top: "18%",
                bottom: "8%",
                left: "5%",
                right: "5%",
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
            textStyle: {
                color: "#fff",
            },
            xAxis: {
                type: "category",
                data: ["3-12", "3-13", "3-14", "3-15", "3-16", "3-17", "3-18"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: "line",
                    symbol: "",
                    symbolSize: 7,
                    smooth: true,
                    lineStyle: {
                        color: "#1bb0ee",
                        width: 1,
                        type: "line",
                    },
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: "#21a0c6",
                        color: "yellow",
                    },
                    areaStyle: {
                        color: "#1bb0ee",
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