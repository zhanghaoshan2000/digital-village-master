<template>
  <div v-html="introduction" style="height: 100%; overflow-y: auto; text-indent: 2em;"></div>
</template>

<script>
export default {
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      this.$axios.get('/convenienceCenter/getAll_on_app').then((res) => {
        var items = res.data.result;     //数据数组x
        if (items.length > 0) {
          this.introduction = items[0].article;
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
  width: 40%;
  height: 100%;
  margin-top: 0.35rem;
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
  width: 1.2rem;
  height: 1rem;
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
