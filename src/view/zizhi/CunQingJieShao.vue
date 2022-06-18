<template>
  <div class="guwen">
    <div id="gunwen_top">
      <div id="gunwen_top_left">
        <img :src="backgroundPicture" />
      </div>
      <div id="gunwen_top_right">
        <div id="title_top">
          <span class="font_guwen" v-html="name"></span>
        </div>
        <div id="title_bottom">
          <div class="test test-1">
            <div class="scrollbar">
              <p v-html="introduction"></p>
            </div>
          </div>
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
      this.$axios.get('/village/getAll_on_app').then((res) => {
        var items = res.data.result;     //数据数组
        if (items.length > 0) {
          this.backgroundPicture = items[0].backgroundPicture;
          this.introduction = items[0].introduction;
          this.name = items[0].name;
        }
      })
    }
  },
  data() {
    return {
      backgroundPicture: '',
      introduction: '',
      name: ''
    }
  }
}
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
  width: 32%;
  height: 100%;
  margin-left: 2%;
  margin-top: 0.35rem;
}

#gunwen_top_right {
  width: 60%;
  margin-left: 8%;
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
  height: 1.55rem;
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
  width: 1.7rem;
  height: 1.4rem;
  background-size: cover;
  margin-top: -0.15rem;
  border-radius: 5px;
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
