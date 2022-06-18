<template>
  <div class="container">
    <!-- 视频数据 -->
    <d-player style="height:100%;width:100%" ref="player5" id="player5" :options="options"></d-player>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        logo:
          "https://qczh-1252727916.cos.ap-nanjing.myqcloud.com/pic/273658f508d04d488414fd2b84c9f923.png", // 在视频左上角上打一个logo
        video: {
          url:
            "https://cuihua-dev-test.oss-cn-shanghai.aliyuncs.com/pinde1.mp4", // 播放视频的路径
          pic:
            "https://cuihua-dev-test.oss-cn-shanghai.aliyuncs.com/pinde1.jpg", // 视频封面图片

        },

      }

    }
  },
  mounted() {
    // 以下为隐藏一些作者的信息和视频播放源 如不需要可删除
    document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
    document.querySelector(".dplayer-mask").remove();
    document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
    let length = document.querySelectorAll(".dplayer-menu-item").length;
    document.querySelectorAll(".dplayer-menu-item")[length - 2].remove(); // 去掉作者信息
    document.querySelectorAll(".dplayer-menu-item")[length - 1].remove(); // 去掉作者信息

  }
};
</script>

<style lang="scss" scoped>
.font_video_title {
}

.video_content {
  display: flex;
  // margin-top: 0.1rem;
  margin-left: 0.1rem;
  flex-direction: column;
}

.container {
  width: 95%;
  height: 1.5rem;
  margin-top: 0.15rem;
  margin-left: 0.03rem;
}
#video_title {
  display: flex;
  width: 96%;
  justify-content: space-between;
  list-style-type: none;
  flex-direction: row;
}
.video_main {
  display: flex;
  width: 97%;
  height: 1.3rem;
}
</style>
