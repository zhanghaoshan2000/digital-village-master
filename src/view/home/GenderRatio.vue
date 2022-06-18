<template>
    <div id="GenderRatio" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("GenderRatio");
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
            color: ["#81c462", "#63b3d6"],
            series: [
                {
                    name: "男女比例",
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "center",
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: "40",
                            fontWeight: "bold",
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        { value: 484, name: "男" },
                        { value: 300, name: "女" },
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