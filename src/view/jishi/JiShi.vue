<template>
  <div class="dang_active">
    <div class="dang_active_left">
      <img src="../../assets/image/f8326c97ef0bd4f45d7361e5f8c2583.jpg" />
    </div>
    <div class="dang_active_right">
      <div id="dang_active_top">
        <span class="font_active">{{item.name}}</span>
      </div>
      <div id="dang_active_bottom">
        <div class="test test-1">
          <div class="scrollbar" v-html="item.description"></div>
        </div>
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
      this.$axios.get('/market/getAll_on_app').then((res) => {
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
.dang_active {
  display: flex;
}

.dang_active_left {
  width: 40%;
  height: 1.85rem;
  margin-top: 0.2rem;
}

img {
  width: 100%;
  height: 1.2rem;
  background-position: cover;
  margin-left: 0.1rem;
  margin-top: 0.15rem;
}

.dang_active_right {
  width: 57%;
  display: flex;
  flex-direction: column;
}

#dang_active_top {
  width: 100%;
  height: 0.5rem;

  margin-left: 0.1rem;
}

#dang_active_bottom {
  width: 93%;
  height: 1.2rem;

  margin-left: 0.15rem;
}

.font_active {
  display: flex;
  margin-top: 0.25rem;
  justify-content: center;
}

.font_active2 {
  display: flex;
  font-size: 0.08rem;
  color: skyblue;
}
.test {
  width: 100%;
  height: 1.3rem;
  overflow: auto;
  float: left;
  margin: 5px;
  border: none;
  text-indent: 0.2rem;
  font-size: 0.1rem;
}
.scrollbar {
  width: 100%;
  height: 300px;
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
</style>
