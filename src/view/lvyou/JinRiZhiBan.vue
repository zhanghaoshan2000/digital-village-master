<template>
    <div class="container">
        <!-- <div style="width: 100%; height: 100%; background-color: white"></div> -->
        <div class="kuang">
            <div class="cards" v-for="(item, index) in items" :key="index">
                <div
                    style="width: 30%; height: 100%;"
                ><li class="iconfont icon-lianxiren"></li></div>
                <div style="width: 70%; height: 100%; position: relative">
                    <span>{{ item.type }}主任:{{ item.name }}</span
                    ><br />
                    <span>联系电话:</span><br />
                    <span style="">{{ item.phone }} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getItems();
    },
    methods: {
        getItems() {
            this.$axios.get("/touristWatchKeeper/getAll_on_app").then((res) => {
                this.items = res.data.result; //数据数组
            });
        },
    },
    data() {
        return {
            items: [],
            people: [
                { title: "值班", name: "王佳丽", phone: "17777777777" },
                { title: "票务", name: "朱克丽", phone: "17777777777" },
                { title: "安全", name: "王佳丽", phone: "17777777777" },
                { title: "车队", name: "王佳丽", phone: "17777777777" },
                { title: "车队", name: "王佳丽", phone: "17777777777" },
            ],
        };
    },
};
</script>

<style scoped>
.container {
    /* background-color: rgba(255, 192, 203, 0.178); */
    height: 100%;
    padding: 6% 10% 6% 10%;
}
.kuang {
    overflow-y: auto;
    height: 100%;
}
li{
	list-style-type: none;
}
.cards {
    width: 100%;
    height: 22%;
    background-color: rgba(0, 0, 0, 0.516);
    margin-top: 3%;
    display: flex;
    font-size: 0.08rem;
}
.cards span {
    position: absolute;
    left: 4%;
}
</style>