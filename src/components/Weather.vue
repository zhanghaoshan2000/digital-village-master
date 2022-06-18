<template>
    <div class="container">
        <div class="up">
            <span style="margin-left: 6%">{{ location }}</span>
            <span style="margin-right: 6%">和风天气</span>
        </div>
        <div class="mid">
            <div class="weather">
                <i :class="now.icon"></i>
                <span class="text">{{ now.text }}</span>
            </div>
            <div class="templ">
                <span class="temp">{{ now.temp }}</span>
                <span class="unit">&#176;</span>
            </div>
        </div>
        <div class="down">
            <div class="l2">
                <span class="key">风速等级</span><br />
                <span class="value">{{ now.windScale }}</span>
            </div>
            <div class="m2">
                <span class="key">相对湿度</span><br />
                <span class="value">{{ now.humidity }}</span>
            </div>
            <div class="r2">
                <span class="key">降水量</span><br />
                <span class="value">{{ now.precip }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            location: "温州",
            now: {},
        };
    },

    mounted() {
        let xhr = new window.XMLHttpRequest();
        xhr.open(
            "get",
            "https://devapi.qweather.com/v7/weather/now?location=101010100&key=e68d34f1b6144d6d822d96f553114745",
            true
        );
        xhr.send();
        var that = this;
        var success = function (res) {
            // console.log(res);
            res.now.icon = "qi-" + res.now.icon;
            that.now = res.now;
        };
        xhr.onreadystatechange = function () {
            //若响应完成且请求成功
            if (xhr.readyState === 4 && xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
        };
    },

    methods: {},
};
</script>
    
<style scoped>
.container {
    width: 100%;
    height: 100%;
    /* background-color: rgba(145, 130, 130, 0.3);
    box-shadow: 2px 2px 6px rgba(99, 89, 89, 0.454); */
    border-radius: 5px;
    overflow: hidden;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.up {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 5%;
}
.mid {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /*background-color: pink;*/
}
.mid .weather {
    display: flex;
    justify-content: space-between;
}
.mid i {
    font-size: 5em;
    line-height: 1.4em;
    margin-left: 0.3em;
}
.mid .text {
    line-height: 3em;
    margin-left: 0.6em;
    line-height: 9em;
    font-size: 1.2em;
}
.mid .templ {
    margin-right: 2em;
}
.mid .temp {
    font-size: 4em;
    line-height: 1.7em;
}
.mid .unit {
    font-size: 4em;
}
.down {
    height: 7em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.down .l2 {
    margin-left: 2.8em;
    text-align: center;
}
.down .m2 {
    text-align: center;
}
.down .r2 {
    margin-right: 2.8em;
    text-align: center;
}
.down .key {
    font-weight: 500;
}
.down .value {
    line-height: 2em;
    font-size: 2.5em;
    font-weight: 200;
}
</style>