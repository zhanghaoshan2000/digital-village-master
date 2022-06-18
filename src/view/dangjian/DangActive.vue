<template>
  <div class="dang_active">
    <div class="dang_active_left">
      <Carousel
        v-model="value2"
        @on-change="onChange"
        arrow="always"
        style="width: 100%; height: 100%; margin-left: 0.2rem;"
      >
        <Carousel-item v-for="(item, index) in items" :key="index" style="padding-top: 0.3%">
          <img :src="item.imgUrl" style="width: 90%;padding-top:3%;padding-bottom:3%" />
        </Carousel-item>
      </Carousel>
    </div>
    <div class="dang_active_right">
      <div id="dang_active_top">
        <span class="font_active" v-html="title">主题党日让党员活动"有滋有味"</span>
      </div>
      <div id="dang_active_bottom">
		  <div class="test test-1">
		    <div class="scrollbar" v-html="content"></div>
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
    onChange(oldval, newval) {      console.log(oldval);
      console.log(newval);
      this.title = this.items[newval].title;
      this.content = this.items[newval].content;

    },
    showDetail: function (e) {
      var i = 1;
      if (i == 1) this.$message(this.extraInfo[e.rowIndex]);
    },
    getItems() {
      this.$axios.get('/partyActivity/getAll_on_app').then((res) => {
        var items = res.data.result;     //数据数组
        console.log(items)
        this.items = items;
        if (this.items.length > 0) {
          this.title = this.items[0].title;
          this.content = this.items[0].content;
        }
      })
    }
  },
  data() {
    return {
      extraInfo: [],
      config: {},
      title: "",
      content: "",
      items: [],
      defaultConfig: {
        header: ['会议主题', '开始时间', '结束时间', '会议地点', '状态', '类型'],
        data: [
          [
            "党务公开,党组织决议、决定和执行情况、党的思想建设情况、党组织建设情况、领导班子建设起来、干部选任和管理情况、党风廉政建设情况、党员名单、计划发展党员花名册、积极分子花名册、党费缴纳情况表等",
            "查看详情",
          ]
        ],
        index: false,
        columnWidth: [300, 150, 150, 150, 100, 100],
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
}
img {
  width: 100%;
  height: 1.8rem;
  background-position: cover;
  margin-left: 0.1rem;
  margin-top: 0.07rem;
}
.dang_active_right {
  width: 57%;
  display: flex;
  flex-direction: column;
}
#dang_active_top {
  width: 100%;
  height: 0.5rem;
  margin-top: 0.07rem;
  margin-left: 0.1rem;
}
#dang_active_bottom {
  width: 93%;
  height: 1.2rem;
  margin-top: 0.07rem;
  margin-left: 0.2rem;
}
.font_active {
  display: flex;
  margin-top: 0.25rem;
  justify-content: center;
}
.font_active2 {
  // display: flex;
  font-size: 0.08rem;
  color: skyblue;
  background-color: #3AB3B9;
}
.test {
  width: 100%;
  height: 0.9rem;
  overflow: auto;
  float: left;
  margin: 5px;
  border: none;
  text-indent: 0.2rem;
  font-size: 0.1rem;
}

.test1 {
  width: 100%;
  height: 1.2rem;
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
  height:1.5rem;
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
</style>
