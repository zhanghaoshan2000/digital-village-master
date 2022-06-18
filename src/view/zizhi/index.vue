<template>
  <div class="zizhi">
    <div class="zizhi_content_down">
      <div id="zizhi_content_right_down">
        <div id="zizhi_title">
          <span>村情介绍</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <cun-qing-jie-shao></cun-qing-jie-shao>
        </dv-border-box-12>
      </div>
      <div id="zizhi_content_left_down">
        <div id="zizhi_title">
          <span>村务公开</span>
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
          <CunWuGongKai />
        </dv-border-box-12>
      </div>
    </div>
    <div class="zizhi_content">
      <div id="zizhi_content_right">
        <div id="zizhi_title">
          <span>村规民约</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="  width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;"
        >
          <CunGuiMinYue />
        </dv-border-box-12>
      </div>
      <div id="zizhi_content_middle">
        <div id="zizhi_title">
          <span>治理成效</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <ShowImage />
        </dv-border-box-12>
      </div>
      <div id="zizhi_content_left">
        <div id="zizhi_title">
          <span>大喇叭</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="  width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;"
        >
          <da-la-ba></da-la-ba>
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
import ShowImage from "./ShowImage.vue";
import CunWuGongKai from './CunWuGongKai'
import CunGuiMinYue from './CunGuiMinYue'
import CunQingJieShao from './CunQingJieShao'
import DaLaBa from './DaLaBa'
export default {
  methods: {
  },
  data() {
    return {
      value2: 0,
    };
  },
  components: { ShowImage, CunWuGongKai, CunGuiMinYue, CunQingJieShao, DaLaBa },
};
</script>

<style lang="scss" scoped>
.zizhi_content {
  width: 95%;
  justify-content: space-between;
  display: flex;
  margin: 0.1rem auto;
}

.zizhi_content_down {
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
}

#zizhi_content_left {
  width: 33%;
}

#zizhi_content_left_down {
  width: 49%;
}

#zizhi_content_middle {
  width: 33%;
}

#zizhi_content_right {
  width: 33%;
}

#zizhi_content_right_down {
  width: 49%;
}

#zizhi_title {
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
