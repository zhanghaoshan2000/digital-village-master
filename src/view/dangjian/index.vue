<template>
  <div class="dangjian">
    <div class="dangjian_content">
      <div id="dangjian_content_right">
        <div id="dangjian_title">
          <span>优秀党员</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <gun-wen style="height: 98%;" />
        </dv-border-box-12>
      </div>
      <div id="dangjian_content_middle">
        <div id="dangjian_title">
          <span>党组新闻</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    "
        >
          <DangHuiXinWen />
        </dv-border-box-12>
      </div>
      <div id="dangjian_content_left">
        <div id="dangjian_title">
          <span>党会安排</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    "
        >
          <DangHuiAnPai />
        </dv-border-box-12>
      </div>
    </div>
    <div class="dangjian_content_down">
      <div id="dangjian_content_right_down">
        <div id="dangjian_title">
          <span>党员活动</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <dang-active style="height: 98%;" />
        </dv-border-box-12>
      </div>
      <div id="dangjian_content_left_down">
        <div id="dangjian_title">
          <span>党课学习</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    "
        >
          <DangKeXueXi />
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
import DangKeXueXi from "./DangKeXueXi";
import DangHuiAnPai from "./DangHuiAnPai";
import GunWen from "./GuWen.vue";
import DangHuiXinWen from "./DangHuiXinWen"
import DangActive from './DangActive.vue'
export default {
  components: {
    DangKeXueXi,
    DangHuiAnPai,
    GunWen,
    DangActive,
    DangHuiXinWen
  },
};
</script>

<style lang="scss" scoped>
.dangjian_content {
  width: 95%;
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
}

.dangjian_content_down {
  width: 95%;
  margin: 0.1rem auto;
  justify-content: space-between;
  display: flex;
}

#dangjian_content_left {
  width: 40%;
}

#dangjian_content_left_down {
  width: 49%;
}

#dangjian_content_middle {
  width: 32%;
}

#dangjian_content_right {
  width: 26%;
}

#dangjian_content_right_down {
  width: 49%;
}

#dangjian_title {
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
