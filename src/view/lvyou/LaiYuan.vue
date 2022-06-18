<template>
    <div id="laiyuan" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    mounted: function () {
        var chartDom = document.getElementById("laiyuan");
        var myChart = window.echarts.init(chartDom);
        var option;
        // prettier-ignore
        let dataAxis = ['鹿城区','龙湾区','瓯海区','洞头区','瑞安市','乐清市','龙港市','永嘉县','平阳县','苍南县','文成县','泰顺县'];
        // prettier-ignore
        let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        option = {
            grid: {
                containLabel: true,
                bottom: "15%",
                left: "5%",
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    color: "#fff",
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                z: 10,
            },
            yAxis: {
                name: "人数",
                nameTextStyle: {
                    color: "#fff",
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "#999",
                    textStyle: {
                        color: "#ffffff",
                    },
                },
            },
            dataZoom: [
                {
                    type: "inside",
                },
            ],
            series: [
                {
                    type: "bar",
                    showBackground: true,
                    itemStyle: {
                        color: new window.echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                { offset: 0, color: "#83bff6" },
                                { offset: 0.5, color: "#188df0" },
                                { offset: 1, color: "#188df0" },
                            ]
                        ),
                    },
                    emphasis: {
                        itemStyle: {
                            color: new window.echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#2378f7" },
                                    { offset: 0.7, color: "#2378f7" },
                                    { offset: 1, color: "#83bff6" },
                                ]
                            ),
                        },
                    },
                    data: data,
                },
            ],
        };
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        myChart.on("click", function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart.dispatchAction({
                type: "dataZoom",
                startValue:
                    dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue:
                    dataAxis[
                        Math.min(
                            params.dataIndex + zoomSize / 2,
                            data.length - 1
                        )
                    ],
            });
        });

        option && myChart.setOption(option);
    },
};
</script>

<style scoped>
</style>