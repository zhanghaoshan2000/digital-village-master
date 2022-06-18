<template>
  <div class="lvyou">
    <div class="lvyou_content_down">
      <div id="lvyou_content_right_down">
        <div id="lvyou_title">
          <span>今日运营</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.85rem">
          <yun-ying style="height: 96%" />
        </dv-border-box-12>
      </div>
      <div id="lvyou_content_right_down">
        <div id="lvyou_title">
          <span>近7日客流量变化</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.85rem">
          <ren-shu-bian-hua style="height: 100%" />
        </dv-border-box-12>
      </div>
      <div id="lvyou_content_left_down">
        <div id="lvyou_title">
          <span>游客分布热力图</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.85rem">
          <Map />
          <div id="allmap" style="width: 100%; height: 100%"></div>
        </dv-border-box-12>
      </div>
      <div id="lvyou_content_left_down">
        <div id="lvyou_title">
          <span>景区未来流量预测</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.85rem">
          <liu-liang-yu-ce style="height: 100%" />
        </dv-border-box-12>
      </div>
    </div>
    <div class="lvyou_content">
      <div id="lvyou_content_right">
        <div id="lvyou_title">
          <span>游客来源</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.8rem">
          <lai-yuan style="width: 100%; height: 100%" />
        </dv-border-box-12>
      </div>
      <div id="lvyou_content_middle1">
        <div id="lvyou_title">
          <span>近七日景区收入</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.8rem">
          <qi-ri-shou-ru style="height: 100%; margin-left: 4%" />
        </dv-border-box-12>
      </div>
      <div id="lvyou_content_middle2">
        <div id="lvyou_title">
          <span>今日值班</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12 style="width: 100%; height: 1.8rem">
          <jin-ri-zhi-ban style="height: 100%" />
        </dv-border-box-12>
      </div>
      <div id="lvyou_content_left">
        <div id="lvyou_title">
          <span>闸口视频显示</span>
          <li class="iconfont icon-shuaxin"></li>
        </div>
        <dv-border-box-12
          style="
                        width: 100%;
                        height: 1.8rem;
                        display: flex;
                        flex-direction: column;
                    "
        >
          <div class="video_content">
            <div class="video_content_sub1">
              <!-- 视频数据 -->
              <d-player
                style="height: 100%; width: 100%"
                ref="player2"
                id="player2"
                :options="options"
              ></d-player>
            </div>
            <div class="video_content_sub2">
              <!-- 视频数据 -->
              <d-player
                style="height: 100%; width: 100%"
                ref="player2"
                id="player2"
                :options="options"
              ></d-player>
            </div>
          </div>
          <div class="title_video_bottom">
            <div id="title_video_bottom_sub">
              <div id="title_video1">
                <span>
                  摄像头
                  <span>A</span>
                </span>
                <span>
                  位置
                  <span>美好家园</span>
                </span>
              </div>
              <div id="title_video2">
                <span>
                  摄像头
                  <span>A</span>
                </span>
                <span>
                  位置
                  <span>美好家园</span>
                </span>
              </div>
            </div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="title_bottom">
      <div id="title_bottom_sub">
        <span>
          咨询量:
          <span>999</span>
        </span>
        <span>
          投诉量:
          <span>999</span>
        </span>
        <span>
          处理量:
          <span>999</span>
        </span>
        <span>
          其他:
          <span>999</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import JinRiZhiBan from "./JinRiZhiBan.vue";
import LaiYuan from "./LaiYuan.vue";
import LiuLiangYuCe from "./LiuLiangYuCe.vue";
import QiRiShouRu from "./QiRiShouRu.vue";
import RenShuBianHua from "./RenShuBianHua.vue";
import YunYing from "./yunying.vue";
import Map from "../../components/BaiduMap/map.vue";

export default {
  components: {
    LaiYuan,
    QiRiShouRu,
    RenShuBianHua,
    LiuLiangYuCe,
    YunYing,
    JinRiZhiBan,
    Map,
  },

  data() {
    return {
      valueHalf: 2.5,
      options: {
        container: document.getElementById("dplayer"), //播放器容器
        mutex: false, //  防止同时播放多个用户，在该用户开始播放时暂停其他用户
        theme: "#b7daff", // 风格颜色，例如播放条，音量条的颜色
        loop: false, // 是否自动循环
        lang: "zh-cn", // 语言，'en', 'zh-cn', 'zh-tw'
        screenshot: false, // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true, // 是否支持热键，调节音量，播放，暂停等
        preload: "auto", // 自动预加载
        volume: 0.7, // 初始化音量
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], //可选的播放速度，可自定义
        logo: "https://qczh-1252727916.cos.ap-nanjing.myqcloud.com/pic/273658f508d04d488414fd2b84c9f923.png", // 在视频左上角上打一个logo
        video: {
          url: "https://cuihua-dev-test.oss-cn-shanghai.aliyuncs.com/cb672a660e9c4c08a653ce3585018604.mp4", // 播放视频的路径
          pic: "https://cuihua-dev-test.oss-cn-shanghai.aliyuncs.com/c77e5c6c8032447ba2ef61d1e444f932.jpg", // 视频封面图片

        },
      },
    };
  },
  mounted() {
    // 以下为隐藏一些作者的信息和视频播放源 如不需要可删除
    document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
    document.querySelector(".dplayer-mask").remove();
    document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
    let length = document.querySelectorAll(".dplayer-menu-item").length;
    document.querySelectorAll(".dplayer-menu-item")[length - 2].remove(); // 去掉作者信息
    document.querySelectorAll(".dplayer-menu-item")[length - 1].remove(); // 去掉作者信息
  },
};
</script>

QiRiShouRu
<style lang="scss" scoped>
.title_bottom {
  background-color: deepskyblue;
  width: 95%;
  margin: 0 auto;
  height: 0.15rem;
  border-radius: 0.05rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#title_bottom_sub {
  display: flex;
  width: 60%;
  height: 0.2rem;
  justify-content: space-between;
  flex-direction: row;
  color: #fff;
  line-height: 0.15rem;
  font-weight: bolder;
}

.lvyou_content {
  width: 95%;
  justify-content: space-between;
  display: flex;
  margin: 0.05rem auto;
}

.lvyou_content_down {
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
}

#lvyou_content_left {
  width: 34%;
}

#lvyou_content_left_down {
  width: 24.7%;
}

#lvyou_content_middle1 {
  width: 24.7%;
}

#lvyou_content_middle2 {
  width: 15%;
}

#lvyou_content_right {
  width: 24.7%;
}

#lvyou_content_right_down {
  width: 24.7%;
}

#lvyou_title {
  width: 100%;
  background-color: deepskyblue;
  // steelblue
  height: 0.15rem;
  border-radius: 0.02rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  border: 1px solid deepskyblue;
}

.video_content {
  display: flex;
  width: 95%;
  height: 1.1rem;
  margin: 0 auto;
  justify-content: space-between;
}

.video_content_sub1 {
  width: 49%;
  // background-color: blue;
  border: 1px solid royalblue;
  margin-top: 0.1rem;
  height: 1.3rem;
}

.video_content_sub2 {
  width: 49%;
  // background-color: blue;
  border: 1px solid royalblue;
  margin-top: 0.1rem;
  height: 1.3rem;
}

.title_video_bottom {
  width: 98%;
  margin: 0 auto;
}

#title_video_bottom_sub {
  display: flex;
  width: 98%;
  margin: 0 auto;
  margin-top: 0.4rem;
  color: skyblue;
}

#title_video1 {
  display: flex;
  width: 49%;
  margin: 0 auto;
  justify-content: space-around;
}

#title_video2 {
  display: flex;
  width: 49%;
  margin: 0 auto;
  justify-content: space-around;
}

.yunshi {
  display: flex;
  width: 80%;
  height: 1.75rem;
  margin: 0rem auto;
  flex-direction: column;
  justify-content: space-between;
}

#heart {
  display: flex;
  background-color: #20b2aa;
  width: 100%;
  height: 30%;
  border-radius: 0.03rem;
  margin-top: 0.08rem;
}

#money {
  display: flex;
  background-color: #eec900;
  width: 100%;
  height: 30%;
  border-radius: 0.03rem;
}

#people {
  display: flex;
  background-color: mediumpurple;
  width: 100%;
  height: 30%;
  border-radius: 0.03rem;
}

#yunshi_left {
  width: 30%;
  list-style-type: none;
  margin-left: 10%;
  margin-top: -0.05rem;
}

#yunshi_right {
  width: 60%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 80%;
  margin-top: 0.05rem;
}
</style>
<!-- <template>
    <Rate allow-half v-model="valueHalf"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
 -->
