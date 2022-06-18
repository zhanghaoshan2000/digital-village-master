<template>
  <Carousel v-model="value2" arrow="always" style="width: 100%; height: 100%">
    <div class="content_mingsu">
      <Carousel-item v-for="(item, index) in items" :key="index" style="padding-top: 0.3%">
        <div id="content">
          <div id="content1">
            <img :src="item.imgUrl" style="width: 100%;" />
          </div>
          <div id="content2">
            <span class="font_title" v-html="item.content"></span>
          </div>
        </div>
      </Carousel-item>
    </div>
  </Carousel>
</template>
<script>
export default {
  data() {
    return {
      value2: 0,
      items: [{
        url: "http://t11.baidu.com/it/u=1543286266,2905206569&fm=173&app=49&f=JPEG?w=640&h=480&s=58B608D60A1E04CA9C05BADB03004025",
        title: "乌龙",
      },
      {
        url: "http://t12.baidu.com/it/u=3340447628,1013188466&fm=173&app=49&f=JPEG?w=640&h=480&s=2D8A2ED95673D7CE7231FE3D03008045",
        title: "舞龙",
      },
      {
        url: "http://t11.baidu.com/it/u=2521785706,3517402931&fm=173&app=49&f=JPEG?w=640&h=480&s=0B9B6985480382DA4C0169AE0300F013",
        title: "舞狮",
      },
      {
        url: "http://nimg.ws.126.net/?url=http://dingyue.ws.126.net/2021/0127/0a037704j00qnleyp002ld200rs00igg0057003g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
        title: "名宿活动",
      },
      ],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    showDetail: function (e) {
      this.$message(e.row[0]);
    },
    getItems() {
      this.$axios.get('/peopleActivity/getAll_on_app').then((res) => {
        this.items = res.data.result;     //数据数组

      })
    }
  }
};
</script>
<style scoped>
.content_mingsu {
  display: flex;
  /* background-color: aliceblue; */
  width: 100%;
  height: 1.8rem;
}
#content {
  display: flex;
  width: 90%;
  height: 1.8rem;
  margin: 0 auto;
  margin-top: 0.05rem;
}
#content1 {
  width: 70%;

  height: 1.5rem;
}
#content2 {
  width: 30%;
	margin-left: 0.1rem;
  height: 1.5rem;
}
.font_title {
  font-size: 0.09rem;
  margin-left: 0.2rem;
}
</style>
