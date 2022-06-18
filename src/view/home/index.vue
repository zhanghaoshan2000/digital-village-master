<template>
	<div class="home">
		<dv-decoration-10 style="width: 100%; height: 5px" />
		<div class="content_main">
			<!-- 内容上半部分 -->
			<div class="content_right">
				<!-- 左边框:村庄基础信息 -->
				<dv-border-box-7 style="width: 100%; height: 1.9rem;background-color: rgba(0,0,0,0.4);">
					<Details></Details>
				</dv-border-box-7>
				<!-- 右下边框:男女比例 -->
				<dv-border-box-7 style="width: 100%; height: 1.75rem; margin-top: 0.3rem;background-color: rgba(0,0,0,0.4);">
					<GenderRatio></GenderRatio>
				</dv-border-box-7>
			</div>
			<!-- 中间边框:地图 -->
			<dv-border-box-7 style="width: 47%; height: 3.8rem;opacity: 0;"> -->
				<!-- <Map></Map> -->
			</dv-border-box-7>
			<div class="content_left">
				<dv-border-box-7 :reverse="true" style="width: 100%; height: 1.9rem;background-color: rgba(0,0,0,0.4);">
					<Weather />
				</dv-border-box-7><!-- 右边边框:学历 -->
				<dv-border-box-7 style="width: 100%; height: 1.75rem; margin-top: 0.3rem;background-color: rgba(0,0,0,0.4);">
					<Education></Education>
				</dv-border-box-7>
			</div>
			<!-- 右边边框 -->
		</div>
	</div>
</template>

<script>
	import Map from "../../components/BaiduMap/map.vue";
	import Weather from "../../components/Weather.vue";
	import Details from "./Details";
	import GenderRatio from "./GenderRatio.vue";
	import Education from "./Education.vue";
	export default {
		components: {
			Map,
			Weather,
			Details,
			GenderRatio,
			Education
		},
	};
</script>

<style lang="scss" scoped>
	.content_left {
		display: flex;
		width: 25%;
		flex-direction: column;
	}

	.content_right {
		display: flex;
		width: 25%;
		flex-direction: column;
	}

	.home {
		background-image: url(../../assets/image/9be814c05eeb15116dfb5a8c78e3ab8.jpg);
		background-size: cover;
		background-position: center;
		border-radius: 10px;
		height: 4.3REM;
		width: 95%;
		margin: 0 auto;
	}
</style>
