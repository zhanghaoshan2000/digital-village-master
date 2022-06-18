import Vue from 'vue'
import App from './App.vue'

//路由
import router from './router/index'

//全局样式
import '@/assets/global.scss'

//echarts组件
import ECharts from 'vue-echarts'
import * as echarts from 'echarts';
window.echarts = echarts;



//全局引用组件DataV
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

//全局引入组件VueDPlayer
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
Vue.use(VueDPlayer);

//引入阿里矢量图
import '@/assets/iconf/iconfont.css'

//echrts地图调试
ECharts.registerMap('china', chinaMap)
Vue.component('chart', ECharts)

//TODO  test
import chinaMap from '@/assets/china.json'


//注册显示详细脚本
import { message } from '@/assets/js/ShowDetails'
Vue.prototype.$message = message;

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://cuihua.top/back/xboot';
// axios.defaults.baseURL = 'http://localhost:8888/xboot';


//iview   '2.0 组件按需引入
import 'iview/dist/styles/iview.css';
import iView from 'iview';
Vue.use(iView);





Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
