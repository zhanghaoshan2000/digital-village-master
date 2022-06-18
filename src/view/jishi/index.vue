<template>
    <div class="jishi">
        <div class="jishi_content_down">
            <div id="jishi_content_right_down">
                <div id="jishi_title">
                    <span>集市介绍</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-8 style="width: 100%; height: 1.95rem">
                    <ji-shi style="height: 98%" />
                </dv-border-box-8>
            </div>
            <div id="jishi_content_left_down">
                <div id="jishi_title">
                    <span>集市数据统计</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-9 style="width: 100%; height: 1.95rem"
                    ><ji-shi-shu-ju-tong-ji style="height: 100%"
                /></dv-border-box-9>
            </div>
        </div>
        <div class="jishi_content">
            <div id="jishi_content_right">
                <div id="jishi_title">
                    <span>七日销量统计</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-9 style="width: 100%; height: 1.95rem"
                    ><qi-ri-xiao-liang-tong-ji style="height: 100%"
                /></dv-border-box-9>
            </div>
            <div id="jishi_content_left">
                <div id="jishi_title">
                    <span>展示特产</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-8 style="width: 100%; height: 1.95rem"
                    ><te-chan-zhan-shi style="height: 100%"
                /></dv-border-box-8>
            </div>
        </div>
    </div>
</template>

<script>
import JiShiShuJuTongJi from "./JiShiShuJuTongJi.vue";
import QiRiXiaoLiangTongJi from "./QiRiXiaoLiangTongJi.vue";
import JiShi from "./JiShi.vue";
import TeChanZhanShi from "./TeChanZhanShi.vue";
export default {
    components: { QiRiXiaoLiangTongJi, JiShiShuJuTongJi, JiShi, TeChanZhanShi },
};
</script>

<style lang="scss" scoped>
.jishi_content {
    width: 95%;
    justify-content: space-between;
    display: flex;
    margin: 0.1rem auto;
}

.jishi_content_down {
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
}

#jishi_content_left {
    width: 34%;
}

#jishi_content_left_down {
    width: 64%;
}

#jishi_content_right {
    width: 64%;
}

#jishi_content_right_down {
    width: 34%;
}

#jishi_title {
    width: 100%;
    background-color: deepskyblue;
    height: 0.15rem;
    border-radius: 0.02rem;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;
    border: 1px solid deepskyblue;
}
</style>
