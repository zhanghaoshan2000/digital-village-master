<style lang="scss" scoped>
	.dashboard {
		position: absolute;
		margin: auto;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 1920px;
		height: 1080px;

		&>div {
			position: absolute;
		}
	}
</style>
<template>
	<div class="dashboard">
		<dv-border-box-1 style="display: flex; font-size: 0.1rem; flex-direction: row">
			<!-- 内容布局 -->
			<!-- 装饰 -->
			<dv-decoration-3 style="
                    width: 2rem;
                    height: 0.3rem;
                    position: absolute;
                    left: 0.5rem;
                " />
			<div class="content_title" style="margin-top: 0.1rem;">
				<section class="p3">
					<a href="#" data-cont="数字乡村智慧中台平台">数字乡村智慧中台平台</a>
				</section><!-- 标题 -->
				<dv-decoration-5 style="width: 4.5rem; height: 0.45rem; margin: -0.25rem 35% 0 27.5%" />
			</div>
			<div class="nav">
				<!-- 导航栏 -->
				<div id="nav_sub">
					<!-- 控制导航栏 -->
					<div class="nav_sub1" @click="toHome">
						<li class="iconfont icon-dianshidaping"></li>
						<span id="font_nav">综合大屏</span>
					</div>
					<div class="nav_sub2" @click="toShiPinJianKong">
						<li class="iconfont icon-jiankong"></li>
						<span id="font_nav">视频监控</span>
					</div>
					<div class="nav_sub3" @click="toZhiHuiDangJian">
						<li class="iconfont icon-dapinglunxun"></li>
						<span id="font_nav">智慧建档</span>
					</div>
					<div class="nav_sub4" @click="toXiangCunZiZhi">
						<li class="iconfont icon-shichanghuodong"></li>
						<span id="font_nav">乡村自治</span>
					</div>
					<div class="nav_sub5" @click="toXiangCunFaZhi">
						<li class="iconfont icon-xietongzhihuidaping"></li>
						<span id="font_nav">乡村法制</span>
					</div>
					<div class="nav_sub6" @click="toXiangCunDeZhi">
						<li class="iconfont icon-qiantaidaping"></li>
						<span id="font_nav">乡村治德</span>
					</div>
					<div class="nav_sub7" @click="toCunErJiShi">
						<li class="iconfont icon-shichang"></li>
						<span id="font_nav">村儿集市</span>
					</div>
					<div class="nav_sub8" @click="toXiangCunLvYou">
						<li class="iconfont icon-lvyoufabu"></li>
						<span id="font_nav">乡村旅游</span>
					</div>
					<div class="nav_sub9" @click="toHuanJingBaoHu">
						<li class="iconfont icon-huanjingjiance"></li>
						<span id="font_nav">环境保护</span>
					</div>
					<div class="nav_sub10" @click="toBianMinFuWu">
						<li class="iconfont icon-shichangzhixu"></li>
						<span id="font_nav">便民服务</span>
					</div>
					<div class="nav_sub11" @click="toXiangCunAnQuan">
						<li class="iconfont icon-anquan"></li>
						<span id="font_nav">乡村安全</span>
					</div>
					<div class="nav_sub12" @click="toGengDuoYingYong">
						<li class="iconfont icon-yingyong"></li>
						<span id="font_nav">更多应用</span>
					</div>
				</div>

				<router-view />
				<!-- <dv-decoration-10
                    style="width: 80%; height: 5px; margin: 0.35rem auto"
                /> -->

			</div>
		</dv-border-box-1>
	</div>
</template>


<script>
	export default {
		methods: {
			toHome: function() {
				this.$router.replace("/zonghedapin");
			},
			toShiPinJianKong: function() {
				this.$router.replace("/shipinjiankong");
			},
			toZhiHuiDangJian: function() {
				this.$router.replace("/zhihuidangjian");
			},
			toXiangCunZiZhi: function() {
				this.$router.replace("/xiangcunzizhi");
			},
			toXiangCunFaZhi: function() {
				this.$router.replace("/xiangcunfazhi");
			},
			toXiangCunDeZhi: function() {
				this.$router.replace("/xiangcundezhi");
			},
			toCunErJiShi: function() {
				this.$router.replace("/cunerjishi");
			},
			toXiangCunLvYou: function() {
				this.$router.replace("/xiangcunlvyou");
			},
			toHuanJingBaoHu: function() {
				this.$router.replace("/huanjingbaohu");
			},
			toBianMinFuWu: function() {
				this.$router.replace("/bianminfuwu");
			},
			toXiangCunAnQuan: function() {
				this.$router.replace("/xiangcunanquan");
			},
			toGengDuoYingYong: function() {
				this.$router.replace("/gengduoyingyong");
			},
		},
	};
</script>
