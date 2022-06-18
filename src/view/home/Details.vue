
<style scoped>
.container {
    width: 100%;
    height: 100%;
}
.top,
.buttom {
    display: flex;
    height: 50%;
}
.top div,
.buttom div {
    width: 33.3333333%;
}
.title {
    font-size: 0.11rem;
    font-weight: 500;
}
.value {
    margin: auto;
    margin-top: 12%;
    width: 100%;
    line-height: 0.4rem;
}
</style>


<template>
    <div class="container">
        <span
            style="
                margin-left: 0.9rem;
                line-height: 0.3rem;
                font-size: 0.13rem;
                font-weight: 600;
            "
            >{{ name }}</span
        >
        <div
            style="
                height: 0.006rem;
                width: 84%;
                background-color: white;
                margin-left: 8%;
            "
        ></div>
        <div style="height: 84%; padding: 0.18rem">
            <div class="top">
                <div>
                    <span class="title">村域面积</span>
                    <span class="value">{{ area }}km</span><sup>2</sup>
                </div>
                <div>
                    <span class="title">常驻人口</span><br />
                    <span class="value">{{ residentPopulation }}个</span>
                </div>
                <div>
                    <span class="title">农户数</span><br />
                    <span class="value">{{ farmerPopulation }}户</span>
                </div>
            </div>
            <div class="buttom" style="margin-top: 5%">
                <div>
                    <span class="title">总耕地面积</span><br />
                    <span class="value">{{ cultivatedArea }}亩</span>
                </div>
                <div>
                    <span class="title">总人口</span><br />
                    <span class="value">{{ population }}人</span>
                </div>

                <div>
                    <span class="title">土地流转率</span><br />
                    <span class="value">{{ landTransferRate }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            area: "",
            residentPopulation: "",
            farmerPopulation: "",
            population: "",
            cultivatedArea: "",
            landTransferRate: "",
        };
    },
    mounted() {
        this.getItems();
    },
    methods: {
        getItems() {
            this.$axios.get("/village/getAll_on_app").then((res) => {
                var items = res.data.result; //数据数组
                if (items.length > 0) {
                    let item = items[0];
                    this.name = item.name;
                    this.area = item.area;
                    this.residentPopulation = item.residentPopulation;
                    this.farmerPopulation = item.farmerPopulation;
                    this.population = item.population;
                    this.cultivatedArea = item.cultivatedArea;
                    this.landTransferRate = item.landTransferRate;
                }
            });
        },
    },
};
</script>

