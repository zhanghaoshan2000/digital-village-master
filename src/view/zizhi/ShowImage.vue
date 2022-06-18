<template>
    <Carousel v-model="value2" arrow="always" style="width: 100%; height: 100%">
        <Carousel-item
            v-for="(item, index) in items"
            :key="index"
            style="padding-top: 0.3%;text-align: center;"
        >
            <img :src="item.url" style="width: 71%" />
        </Carousel-item>
    </Carousel>
</template>
<script>
export default {
    data() {
        return {
            value2: 0,
            items: [
                {
                    url: "http://t11.baidu.com/it/u=1543286266,2905206569&fm=173&app=49&f=JPEG?w=640&h=480&s=58B608D60A1E04CA9C05BADB03004025",
                },
                {
                    url: "http://t12.baidu.com/it/u=3340447628,1013188466&fm=173&app=49&f=JPEG?w=640&h=480&s=2D8A2ED95673D7CE7231FE3D03008045",
                },
                {
                    url: "http://t11.baidu.com/it/u=2521785706,3517402931&fm=173&app=49&f=JPEG?w=640&h=480&s=0B9B6985480382DA4C0169AE0300F013",
                },
                {
                    url: "http://nimg.ws.126.net/?url=http://dingyue.ws.126.net/2021/0127/0a037704j00qnleyp002ld200rs00igg0057003g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
                },
            ],
        };
    },
};
</script>
<style scoped>
</style>
