<template>
	<div class="fazhi">
		<div class="fazhi_content">
			<div id="fazhi_content_left">
				<div id="fazhi_title">
					<span>法律顾问</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="width: 100%; height: 1.95rem">
					<fa-zhi-gu-wen style="height: 98%" />
				</dv-border-box-12>
			</div>

			<div id="fazhi_content_middle">
				<div id="fazhi_title">
					<span>普法宣传</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 3%;
                    ">
					<pu-fa-xuan-chuan></pu-fa-xuan-chuan>
				</dv-border-box-12>
			</div>
			<div id="fazhi_content_right">
				<div id="fazhi_title">
					<span>法制要闻</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    ">
					<FaZhiYaoWen></FaZhiYaoWen>
				</dv-border-box-12>
			</div>
		</div>

		<div class="fazhi_content_down">
			<div id="fazhi_content_right_down">
				<div id="fazhi_title">
					<span>普法宣讲</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="
                        width: 100%;
                        height: 1.95rem;
                        padding-top: 1.5%;
                        padding-left: 2%;
                    ">
					<PuFaXuanJiang />
				</dv-border-box-12>
			</div>
			<div id="fazhi_content_left_down">
				<div id="fazhi_title">
					<span>法治活动</span>
					<li class="iconfont icon-shuaxin"></li>
				</div>
				<dv-border-box-12 style="width: 100%; height: 1.95rem">
					<fa-zhi-huo-dong style="width: 100%; height: 100%" />
				</dv-border-box-12>
			</div>
		</div>
	</div>
</template>

<script>
	import Lawer from "./Lawer.vue";
	import FaZhiYaoWen from "./FaZhiYaoWen";
	import PuFaXuanJiang from "./PuFaXuanJiang";
	import FaZhiGuWen from "./FaZhiGuWen.vue";
	import FaZhiHuoDong from "./FaZhiHuoDong.vue";
	import PuFaXuanChuan from "./PuFaXuanChuan"
	export default {
		components: {
			Lawer,
			FaZhiYaoWen,
			PuFaXuanJiang,
			FaZhiGuWen,
			FaZhiHuoDong,
			PuFaXuanChuan
		},
	};
</script>

<style lang="scss" scoped>
	.fazhi_content {
		width: 95%;
		justify-content: space-between;
		display: flex;
		margin: 0rem auto;
		margin-bottom: 0.1rem;
	}

	.fazhi_content_down {
		width: 95%;
		margin: 0 auto;
		justify-content: space-between;
		display: flex;
	}

	#fazhi_content_left {
		width: 33%;
	}

	#fazhi_content_left_down {
		width: 49%;
	}

	#fazhi_content_middle {
		width: 33%;
	}

	#fazhi_content_right {
		width: 33%;
	}

	#fazhi_content_right_down {
		width: 49%;
	}

	#fazhi_title {
		width: 100%;
		background-color: deepskyblue;
		height: 0.15rem;
		border-radius: 0.02rem;
		display: flex;
		flex-direction: row;
		list-style-type: none;
		justify-content: space-between;
		border: 1px solid deepskyblue;
	}
</style>
