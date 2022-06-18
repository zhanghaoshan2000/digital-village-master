<style scoped>
.container {
    height: 100%;
    display: flex;
}
.card {
    width: 100%;
    border-radius: 10px;
    height: 21%;
    background-color: #3ab3b9;
    margin-top: 3%;
    margin-left: 7%;
	text-align: center;
}
.title {
    font-weight: 600;
    font-size: 1.3em;
	
}
.value {
    color: #df5931c7;
    font-weight: 500;
    font-size: 1.3em;
    line-height: 1.1em;
}
</style>
<template>
    <div class="container">
        <div
            style="
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding: 2%;
                margin-top: 1%;
            "
        >
            <div class="card">
                <span class="title">新增确诊</span><br />
                <span class="value">{{ quezhen }}</span>
            </div>
            <div class="card">
                <span class="title">新增本土</span><br />
                <span class="value">{{ bentu }}</span>
            </div>
            <div class="card">
                <span class="title">新增境外</span><br />
                <span class="value">{{ jingwai }}</span>
            </div>
            <div class="card">
                <span class="title">新增无症状</span><br />
                <span class="value">{{ wuzhenzhuang }}</span>
            </div>
        </div>
        <div id="yiqingfangkong" style="width: 65%; height: 100%"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quezhen: 3,
            bentu: 0,
            jingwai: 6,
            wuzhenzhuang: 32,
            option: {},
        };
    },
    mounted: function () {
        var chartDom = document.getElementById("yiqingfangkong");
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
