<template>
  <div class="fuwu">
    <div class="fuwu_content_down">
      <div id="fuwu_content_right_down">
        <div id="fuwu_title">
          <span>便民服务中心</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem; padding: 3%">
          <bian-min-fu-wu-zhong-xin />
        </dv-border-box-12>
      </div>
      <div id="fuwu_content_left_down">
        <div id="fuwu_title">
          <span>乡村服务</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <ming-su-huo-dong style="height: 100%" />
        </dv-border-box-12>
      </div>
    </div>
    <div class="fuwu_content">
      <div id="fuwu_content_right">
        <div id="fuwu_title">
          <span>一村一品</span>
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
          <yi-cun-yi-ping style="height: 100%" />
        </dv-border-box-12>
      </div>
      <div id="fuwu_content_middle">
        <div id="fuwu_title">
          <span>人才招聘</span>
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
          <RenCaiZhaoPin />
        </dv-border-box-12>
      </div>
      <div id="fuwu_content_left">
        <div id="fuwu_title">
          <span>便民查询</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <bian-min-cha-xun style="height: 95%;" />
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
import MingSuHuoDong from "./MingSuHuoDong.vue";
import RenCaiZhaoPin from "./RenCaiZhaoPin";
import YiCunYiPing from "./YiCunYiPing.vue";
import BianMinChaXun from "./BianMinChaXun.vue";
import BianMinFuWuZhongXin from "./BianMinFuWuZhongXin"

export default {
  components: { RenCaiZhaoPin, YiCunYiPing, MingSuHuoDong, BianMinChaXun, BianMinFuWuZhongXin },
};
</script>

<style lang="scss" scoped>
.fuwu_content {
  width: 95%;
  justify-content: space-between;
  display: flex;
  margin: 0.1rem auto;
}

.fuwu_content_down {
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
}

#fuwu_content_left {
  width: 33%;
}

#fuwu_content_left_down {
  width: 49%;
}

#fuwu_content_middle {
  width: 33%;
}

#fuwu_content_right {
  width: 33%;
}

#fuwu_content_right_down {
  width: 49%;
}

#fuwu_title {
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
