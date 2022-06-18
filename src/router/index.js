import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '../view/home/index.vue'
import AnQuan from '../view/anquan/index.vue'
import DangJian from '../view/dangjian/index.vue'
import DeZhi from '../view/dezhi/index.vue'
import FuWu from '../view/fuwu/index.vue'
import GengDuo from '../view/gengduo/index.vue'
import HuanJing from '../view/huanjing/index.vue'
import JianKong from '../view/jiankong/index.vue'
import JiShi from '../view/jishi/index.vue'
import LvYou from '../view/lvyou/index.vue'
import ZiZhi from '../view/zizhi/index.vue'
import FaZhi from '../view/fazhi/index.vue'
import Test from '../view/test/index'


const routes = [
    {
        //默认：综合大屏
        path: '/',
        component: Home
    },
    {
        //综合大屏
        path: '/zonghedapin',
        component: Home
    },
    {
        //视频监控
        path: '/shipinjiankong',
        component: JianKong
    },
    {
        //智慧党建
        path: '/zhihuidangjian',
        component: DangJian
    },
    {
        //乡村自治
        path: '/xiangcunzizhi',
        component: ZiZhi
    },
    {
        //乡村法治
        path: '/xiangcunfazhi',
        component: FaZhi
    },
    {
        //乡村德治
        path: '/xiangcundezhi',
        component: DeZhi
    },
    {
        //村儿集市
        path: '/cunerjishi',
        component: JiShi
    },
    {
        //乡村旅游
        path: '/xiangcunlvyou',
        component: LvYou
    },
    {
        //环境保护
        path: '/huanjingbaohu',
        component: HuanJing
    },
    {
        //便民服务
        path: '/bianminfuwu',
        component: FuWu
    },
    {
        //乡村安全
        path: '/xiangcunanquan',
        component: AnQuan
    },
    {
        //更多应用
        path: '/gengduoyingyong',
        component: GengDuo
    },
    {
        //更多应用
        path: '/test',
        component: Test
    },


]

const router = new VueRouter({
    routes
})

export default router