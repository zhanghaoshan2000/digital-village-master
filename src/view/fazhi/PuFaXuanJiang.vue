<template>
  <div class="container">
    <dv-scroll-board :config="config" style="width: 98%; height: 96%; " />
  </div>
</template>

<script>
export default {
  mounted() {
    this.getItems();
  },
  methods: {
    showDetail: function (e) {
      console.log(e);
      this.$message(e.row[0]);
    },
    fillItem(fill) {
      var item = [];
      item.push(fill.theme);
      item.push(fill.startTime)
      item.push(fill.endTime)
      item.push(fill.address)
      item.push(fill.lecturer)
      item.push(fill.state)
      return item;
    },
    getItems() {
      this.$axios.get('/lawPropaganda/getAll_on_app').then((res) => {
        var items = res.data.result;     //数据数组
        console.log(items);

        var configData = [];

        var i = 0;
        for (; i < items.length; i++) {       //格式化数据
          var item = this.fillItem(items[i]);

          configData.push(item)
        }

        for (; i < 8; i++) {          //补充条数以确保表格占据背景
          item = this.fillItem(items[i % items.length]);
          configData.push(item)
        }

        if (configData.length % 2 == 1) {           //确保拥有偶数条记录使得奇偶背景色总是交替出现
          i += 1;
          item = this.fillItem(items[i % items.length]);
          configData.push(item)
        }

        var curConfig = this.defaultConfig;       //设置config
        curConfig.data = configData;
        this.config = curConfig;
      }).catch((e) => {
        var i = 1;
        if (i == 0) console.log(e)
      })
    }
  },
  data() {
    return {
      config: {},
      defaultConfig: {
        header: ['党课主题', '开始时间', '结束时间', '学习地点', '主持人', '状态'],
        data: [
          [
            "党务公开,党组织决议、决定和执行情况、党的思想建设情况、党组织建设情况、领导班子建设起来、干部选任和管理情况、党风廉政建设情况、党员名单、计划发展党员花名册、积极分子花名册、党费缴纳情况表等",
            "查看详情",
          ]
        ], rowNum: 6,

        index: true,
        columnWidth: [100, 700, 300, 300, 200, 200, 150],
        align: ["left", "left"],
      },
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>