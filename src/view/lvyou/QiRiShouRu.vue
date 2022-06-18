<template>
    <div id="shouru" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("shouru");
        var myChart = window.echarts.init(chartDom);
        var option;

        option = {
            xAxis: {
                type: "category",
                data: ["3-26", "3-14", "3-15", "3-16", "3-17", "3-18", "3-19"],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ffffff",
                    },
                    color: "#fff",
                },
            },
            yAxis: {
                name: "收入(元)",
                nameTextStyle: {
                    color: "#fff",
                },
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ffffff",
                    },
                },
            },
            series: [
                {
                    data: [70, 130, 124, 168, 195, 247, 260],
                    type: "line",
                    textStyle: {
                        color: "#ffffff",
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