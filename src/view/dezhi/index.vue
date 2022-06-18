<template>
  <div class="dezhi">
    <div class="dezhi_content_down">
      <div id="dezhi_content_right_down">
        <div id="dezhi_title">
          <span>新时代文明实践</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem; padding: 3%; position: relative;">
          <!-- <div
                        v-html="content"
                        style="height: 100%; overflow-y: auto; text-indent: 2em"
          ></div>-->
          <wen-ming-shi-jian></wen-ming-shi-jian>
        </dv-border-box-12>
      </div>
      <div id="dezhi_content_left_down">
        <div id="dezhi_title">
          <span>民俗活动</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <ming-su-huo-dong style="height: 100%" />
        </dv-border-box-12>
      </div>
    </div>
    <div class="dezhi_content">
      <div id="dezhi_content_right">
        <div id="dezhi_title">
          <span>家风家训</span>
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
          <JiaFengJiaXun></JiaFengJiaXun>
        </dv-border-box-12>
      </div>
      <div id="dezhi_content_middle">
        <div id="dezhi_title">
          <span>品德教育</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 3%;
                    "
        >
          <pin-de-jiao-yu></pin-de-jiao-yu>
        </dv-border-box-12>
      </div>
      <div id="dezhi_content_left">
        <div id="dezhi_title">
          <span>道德模范</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.95rem">
          <dao-de-mo-fan style="height: 100%" />
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
import DaoDeMoFan from "./DaoDeMoFan.vue";
import JiaFengJiaXun from "./JiaFengJiaXun";
import MingSuHuoDong from "./MingSuHuoDong.vue";
import WenMingShiJian from "./WenMingShiJian";
import PinDeJiaoYu from "./PinDeJiaoYu";

export default {
  data() {
    return {
      content:
        "<p>岳峰镇商贸经济发达，一直以来都是商贸强镇，岳峰镇新时代文明实践所依托东二环商圈党建hui客厅，充分整合资源，搭建共享平台，因地制宜，创新服务项目，为辖区企业提供优质服务，极大地优化了营商环境，为商贸经发展增添动力。<br/>整合资源，搭建共享平台。围绕“党建＋”等各项工作，在岳峰镇新时代文明实践所设置红心超市、孵化中心、白领驿站、阅览室、谈心室等功能区域，打造党员集中活动点、职工群众休憩点、商铺业主议事点、公共活动服务点“四合一”的共享型阵地，吸引辖区企业共聚于此，增进交流、促进成长，助推诚信经营，引领诚心服务，共筑美好家园。<br/>优化服务，开发线上平台。为了让企业少跑腿，提高办事效率，岳峰镇新时代文明实践所致力开发线上服务平台。4月23日，岳峰镇新时代文明实践所正式启用“走近岳峰”APP，率先构建“前端服务企业，后端服务政府”模式，实现从“企业找政策”到“政策找企业”转变，确保各项政策直接惠及市场主体，推动实现经济领域“企业服务全覆盖、招商资源全掌握、经济态势全感知”，形成“服务—管理—服务”良性循环，助力改善营商环境，提升岳峰智慧经济水平和质量。目前，“走近岳峰”APP已上线，可了解惠企政策查询、政策速配、政策申报、企业圈、企业数字空间、物业管理、金融服务等功能模块，后续还将接入海峡银行一贷通，提供线上信用金融服务、搭配独享相应的优惠，帮助企业解决发展中的资金问题，为辖区内企业提供全方位、智慧化的服务。</p>",
    };
  },
  components: { JiaFengJiaXun, MingSuHuoDong, DaoDeMoFan, WenMingShiJian, PinDeJiaoYu },
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
