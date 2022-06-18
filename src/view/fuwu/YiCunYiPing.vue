<template>
  <Carousel v-model="value2" arrow="always" style="width: 100%; height: 100%">
    <Carousel-item v-for="(item, index) in items" :key="index" style="padding-top: 0.3%">
      <div id="content2">
        <img :src="item.imgUrl" style="width: 66%;" />
        <span>{{item.name}}</span>
      </div>
    </Carousel-item>
  </Carousel>
</template>

<script>
export default {
  mounted() {
    this.getItems();
  },
  methods: {

    getItems() {
      this.$axios.get('/specialty/getAll_on_app').then((res) => {
        this.items = res.data.result;     //数据数组

      })
    }
  },
  data() {
    return {
      items: [],
      extraInfo: [],
      config: {},
      defaultConfig: {
        header: [],
        data: [
          [
            "党务公开,党组织决议、决定和执行情况、党的思想建设情况、党组织建设情况、领导班子建设起来、干部选任和管理情况、党风廉政建设情况、党员名单、计划发展党员花名册、积极分子花名册、党费缴纳情况表等",
            "查看详情",
          ]
        ], rowNum: 7,
        index: false,
        columnWidth: [900, 100],
        align: ["left", "left"],
      },
    }
  }
};
</script>


<style scoped>
#content2 {
  display: flex;
  flex-direction: column;
}
img {
  margin: 0 auto;
}
span{
	text-align: center;
}
</style>
