<template>
  <div class="guwen">
    <div id="gunwen_top">
      <div id="gunwen_top_left">
        <img src="../../assets/image/803fb70e34f2cc89d5f9fdf74ab8563.jpg" />
      </div>
      <div id="gunwen_top_right">
        <div id="title_top">
          <img src="../../assets/image/0bb5fa32b08737df24d5936d5baa82a.png" class="logo" />
          <span class="font_guwen">{{item.name}}同志简介</span>
        </div>
        <div id="title_bottom">
          <div class="test test-1">
            <div class="scrollbar" v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="gunwen_bottom">
      <div class="test1 test-1">
        <div class="scrollbar1" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      this.$axios.get('/youXiuDangYuan/getAll_on_app').then((res) => {
        var items = res.data.result;     //数据数组
        if (items.length > 0) {
          this.item = items[0];
        }
      })
    }
  },
  data() {
    return {
      item: {},
      config: {},
      defaultConfig: {
        header: ['党课主题', '开始时间', '结束时间', '学习地点', '主讲人', '状态'],
        data: [
          [
            "党务公开,党组织决议、决定和执行情况、党的思想建设情况、党组织建设情况、领导班子建设起来、干部选任和管理情况、党风廉政建设情况、党员名单、计划发展党员花名册、积极分子花名册、党费缴纳情况表等",
            "查看详情",
          ]
        ], rowNum: 6,

        index: true,
        columnWidth: [50, 300, 150, 150, 150, 100, 100],
        align: ["left", "center"],
      },
    }
  }
};
</script>

<style lang="scss" scoped>
.guwen {
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 1.85rem;
  margin: 0 auto;
}

#gunwen_top {
  display: flex;
  width: 100%;
  height: 0.8rem;
  margin-top: 0.1rem;
}

#gunwen_bottom {
  display: flex;
  width: 100%;
  height: 0.95rem;
}

#gunwen_top_left {
  width: 40%;
  height: 100%;
}

#gunwen_top_right {
  width: 58%;
  margin-left: 2%;
  height: 100%;
  flex-direction: column;
  display: flex;
}

#title_top {
  width: 95%;
  height: 20%;
  display: flex;
}

#title_bottom {
  width: 100%;
  display: flex;
  word-break: break-all;
  height: 100%;
}

.test {
  width: 100%;
  height: 0.61rem;
  overflow: auto;
  float: left;
  margin: 5px;
  border: none;
  text-indent: 0.2rem;
  font-size: 0.1rem;
}

.test1 {
  width: 100%;
  height: 0.91rem;
  overflow: auto;
  float: left;
  margin: 5px;
  border: none;
  display: flex;
  justify-content: flex-start;
  text-indent: 0.2rem;
  font-size: 0.1rem;
}

.scrollbar {
  width: 100%;
  height: 300px;
}

.scrollbar1 {
  width: 100%;
  height: 500px;
}

.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: royalblue;
}

.test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
}

img {
  width: 1rem;
  height: 0.8rem;
  background-size: cover;
}

.logo {
  width: 12%;
  height: 100%;
  background-size: cover;
}

.font_guwen {
  line-height: 0.18rem;
}
</style>
