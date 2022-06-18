<template>
  <div class="container">
    <dv-scroll-board :config="config" style="width: 98%; height: 96%" @click="showDetail" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.getItems();
  },
  methods: {
    showDetail: function (e) {
      var i = 1;
      if (i == 1) this.$message(this.extraInfo[e.rowIndex]);
    },
    fillItem(fill) {          //从fill中提取部分数据作为item列元素
      var item = [];
      item.push(fill.title);
      item.push(fill.startTime);
      item.push(fill.endTime)
      item.push(fill.address)
      item.push(fill.state)
      item.push(fill.type)
      this.extraInfo.push(this.getExtraInfoItem(fill))
      return item;
    },
    getExtraInfoItem(fill) {
      var ret = "会议主题:" + fill.title + "<br/>" + "开始时间:" + fill.startTime + "<br/>" + "结束时间" + fill.endTime + "<br/>"
        + "会议地点:" + fill.address + "<br/>状态:" + fill.state + "<br/>类型:" + fill.type;
      return ret;
    },
    getItems() {
      this.$axios.get('/partyCommitteeArrangement/getAll_on_app').then((res) => {
        var items = res.data.result;     //数据数组
        console.log(items)
        var configData = [];

        var i = 0;

        for (; i < items.length; i++) {       //填充数据
          var item = this.fillItem(items[i]);
          configData.push(item)
        }

        for (; i < 8; i++) {          //补充条数以尽可能铺满表格
          item = item = this.fillItem(items[i % items.length]);
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
      })
    }
  },
  data() {
    return {
      extraInfo: [],
      config: {},
      defaultConfig: {
        header: ['会议主题', '开始时间', '结束时间', '会议地点', '状态', '类型'],
        data: [
          [
            "党务公开,党组织决议、决定和执行情况、党的思想建设情况、党组织建设情况、领导班子建设起来、干部选任和管理情况、党风廉政建设情况、党员名单、计划发展党员花名册、积极分子花名册、党费缴纳情况表等",
            "查看详情",
          ]
        ], rowNum: 6,

        index: false,
        columnWidth: [300, 150, 150, 150, 100, 100],
        align: ["left", "center"],
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