<template>
	<div class="huanjing">
		<div class="huanjing_content_down">
			<div id="huanjing_content_right_first">
				<div id="huanjing_title">
					<span>巡护信息报告</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="width: 100%; height: 1.8rem">
					<xun-hu-xin-xi style="height: 98%; " />
				</dv-border-box-12>
			</div>
			<div id="huanjing_content_left_down">
				<div id="huanjing_title">
					<span>水质检测</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="width: 100%; height: 1.8rem">
					<shui-zhi-jian-ce style="height: 100%" />
				</dv-border-box-12>
			</div>
			<div id="huanjing_content_left_down">
				<div id="huanjing_title">
					<span>噪音检测</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="width: 100%; height: 1.8rem">
					<zao-yin-jian-ce style="height: 100%" />
				</dv-border-box-12>
			</div>
		</div>
		<div class="huanjing_content">
			<div id="huanjing_content_right">
				<div id="huanjing_title">
					<span>乡村植物种类</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.8rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    ">
					<XiangCunZhiWu />
				</dv-border-box-12>
			</div>
			<div id="huanjing_content_middle1">
				<div id="huanjing_title">
					<span>乡村动物种类</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.8rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    ">
					<XiangCunDongWu />
				</dv-border-box-12>
			</div>
			<div id="huanjing_content_middle2">
				<div id="huanjing_title">
					<span>乡村地质分布</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.8rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    ">
					<XiangCunDiZhi />
				</dv-border-box-12>
			</div>
			<div id="huanjing_content_left">
				<div id="huanjing_title">
					<span>负氧离子监测</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.8rem;
                        display: flex;
                        flex-direction: column;
                    ">
					<fu-yang-li-zi-jian-ce style="height: 100%" />
				</dv-border-box-12>
			</div>
		</div>
		<div class="huanjing_direction">
			<dv-decoration-6 style="width: 300px; height: 0.15rem" />
			<dv-decoration-6 style="width: 300px; height: 0.15rem" />
		</div>
	</div>
</template>

<script>
	import FuYangLiZiJianCe from "./FuYangLiZiJianCe.vue";
	import ShuiZhiJianCe from "./ShuiZhiJianCe.vue";
	import XiangCunDiZhi from "./XiangCunDiZhi.vue";
	import XiangCunDongWu from "./XiangCunDongWu.vue";
	import XiangCunZhiWu from "./XiangCunZhiWu.vue";
	import ZaoYinJianCe from "./ZaoYinJianCe.vue";
	import XunHuXinXi from "./XunHuXinXi.vue";
	export default {
		components: {
			XiangCunDiZhi,
			XiangCunDongWu,
			XiangCunZhiWu,
			ShuiZhiJianCe,
			ZaoYinJianCe,
			FuYangLiZiJianCe,
			XunHuXinXi,
		},
	};
</script>


<style lang="scss" scoped>
	.huanjing_direction {
		width: 95%;
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
		flex-direction: row;
	}

	.title_bottom {
		background-color: deepskyblue;
		width: 95%;
		margin: 0 auto;
		height: 0.2rem;
		border-radius: 0.05rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	#title_bottom_sub {
		display: flex;
		width: 60%;
		height: 0.2rem;
		justify-content: space-between;
		flex-direction: row;
		color: #fff;
		line-height: 0.2rem;
		font-weight: bolder;
	}

	.huanjing_content {
		width: 95%;
		justify-content: space-between;
		display: flex;
		margin: 0.1rem auto;
	}

	.huanjing_content_down {
		width: 95%;
		margin: 0 auto;
		justify-content: space-between;
		display: flex;
	}

	#huanjing_content_right_first {
		width: 49%;
	}

	#huanjing_content_left {
		width: 24.7%;
	}

	#huanjing_content_left_down {
		width: 24.7%;
	}

	#huanjing_content_middle1 {
		width: 24.7%;
	}

	#huanjing_content_middle2 {
		width: 24.7%;
	}

	#huanjing_content_right {
		width: 24.7%;
	}

	#huanjing_content_right_down {
		width: 34%;
	}

	#huanjing_title {
		width: 100%;
		background-color: deepskyblue;
		// steelblue
		height: 0.15rem;
		border-radius: 0.02rem;
		display: flex;
		flex-direction: row;
		list-style-type: none;
		justify-content: space-between;
		border: 1px solid deepskyblue;
	}

	.video_content {
		display: flex;
		width: 95%;
		height: 1.1rem;
		margin: 0 auto;
		justify-content: space-between;
	}

	.video_content_sub1 {
		width: 49%;
		// background-color: blue;
		border: 1px solid royalblue;
		margin-top: 0.1rem;
		height: 1.3rem;
	}

	.video_content_sub2 {
		width: 49%;
		// background-color: blue;
		border: 1px solid royalblue;
		margin-top: 0.1rem;
		height: 1.3rem;
	}

	.title_video_bottom {
		width: 98%;
		margin: 0 auto;
	}

	#title_video_bottom_sub {
		display: flex;
		width: 98%;
		margin: 0 auto;
		margin-top: 0.4rem;
		color: skyblue;
	}

	#title_video1 {
		display: flex;
		width: 49%;
		margin: 0 auto;
		justify-content: space-around;
	}

	#title_video2 {
		display: flex;
		width: 49%;
		margin: 0 auto;
		justify-content: space-around;
	}

</style>
