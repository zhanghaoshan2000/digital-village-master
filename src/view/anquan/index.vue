<template>
    <div class="dezhi">
        <div class="dezhi_content_down">
            <div id="dezhi_content_right_down">
                <div id="dezhi_title">
                    <span>疫情防控</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-12 style="width: 100%; height: 1.95rem">
                    <yi-qing-fang-kong style="height: 100%" />
                </dv-border-box-12>
            </div>
            <div id="dezhi_content_left_down">
                <div id="dezhi_title">
                    <span>自然灾害防控</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <div class="content_left_first">
                    <dv-border-box-12 style="width: 60%; height: 1.95rem">
                        <fang-kong style="height: 92%" />
                    </dv-border-box-12>
                    <dv-border-box-12 style="width: 40%; height: 1.95rem">
                        <lable-card style="100%" />
                    </dv-border-box-12>
                </div>
            </div>
        </div>
        <div class="dezhi_content">
            <div id="dezhi_content_right">
                <div id="dezhi_title">
                    <span>事故统计</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-12 style="width: 100%; height: 1.95rem">
                    <shi-gu-tong-ji style="height: 100%" />
                </dv-border-box-12>
            </div>
            <div id="dezhi_content_middle">
                <div id="dezhi_title">
                    <span>水位监控</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-12 style="width: 100%; height: 1.95rem">
                    <shui-wei-jian-kong style="height: 100%" />
                </dv-border-box-12>
            </div>
            <div id="dezhi_content_left">
                <div id="dezhi_title">
                    <span>安全知识</span>
                    <li class="iconfont icon-shuaxin"></li>
                </div>
                <dv-border-box-12 style="width: 100%; height: 1.95rem"
                    ><an-quan-zhi-shi style="height: 100%"
                /></dv-border-box-12>
            </div>
        </div>
    </div>
</template>

<script>
import ShiGuTongJi from "./ShiGuTongJi.vue";
import ShuiWeiJianKong from "./ShuiWeiJianKong.vue";
import YiQingFangKong from "./YiQingFangKong.vue";
import FangKong from "./FangKong.vue";
import LableCard from "./LableCard.vue";
import AnQuanZhiShi from "./AnQuanZhiShi.vue";
export default {
    components: {
        ShiGuTongJi,
        ShuiWeiJianKong,
        YiQingFangKong,
        FangKong,
        LableCard,
        AnQuanZhiShi,
    },
};
</script>

<style lang="scss" scoped>
.dezhi_content {
    width: 95%;
    justify-content: space-between;
    display: flex;
    margin: 0.1rem auto;
}

.dezhi_content_down {
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
}

.content_left_first {
    display: flex;
}

#dezhi_content_left {
    width: 33%;
}

#dezhi_content_left_down {
    width: 49%;
}

#dezhi_content_middle {
    width: 33%;
}

#dezhi_content_right {
    width: 33%;
}

#dezhi_content_right_down {
    width: 49%;
}

#dezhi_title {
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
