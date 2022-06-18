<template>
	<div class="Bian_Min">
		<div id="Bian_Mintitle1">
			<div id="head_title">
				<a href="http://www.wenzhou.gov.cn/">查询车辆</span>
				</a>
			</div>
			<div id="title_img1">
				<a href="http://www.wenzhou.gov.cn/">
				<img src="../../assets/iconf/che.png">
				</a>
			</div>
		</div>
		<div id="Bian_Mintitle1">
			<div id="head_title">
				<a href="http://www.wenzhou.gov.cn/col/col1217494/index.html">
				<span>查询地图</span>
				</a>
			</div>
			<div id="title_img1">
				<a href="http://www.wenzhou.gov.cn/col/col1217494/index.html">
				<img src="../../assets/image/fuwu.png">
				</a>
			</div>

		</div>
		<div id="Bian_Mintitle1">
			<div id="head_title">
				<a href="http://www.zjzwfw.gov.cn/zjservice/front/index/page.do?webId=28">
				<span>查询村坐标</span>
				</a>
			</div>
			<div id="title_img1">
				<a href="http://www.zjzwfw.gov.cn/zjservice/front/index/page.do?webId=28">
				<img src="../../assets/image/zuobiao.png">
				</a>
			</div>

		</div>
		<div id="Bian_Mintitle1">
			<div id="head_title">
				<a href="http://www.wenzhou.gov.cn/col/col1214428/index.html">
				<span>援助电话</span>
				</a>
			</div>
			<div id="title_img1">
				<a href="http://www.wenzhou.gov.cn/col/col1214428/index.html">
				<img src="../../assets/image/dianhua.png">
				</a>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	        return {
	            value2: 0,
	            items: [],
	        };
	    },
	};
</script>

<style lang="scss" scoped>
	.Bian_Min{
		display: flex;
		width: 90%;
		justify-content: space-between;
		margin: 0 auto;
		
	}
	#Bian_Mintitle1{
		margin-top: 0.25rem;
		
	}
	img{
		width: 0.6rem;
		height: 0.6rem;
		background-position: center;
		background-size: cover;
		margin-top: 0.25rem;
		border-radius: 0.05rem;
	}
	#head_title{
		
		width: 90%;
		height: 0.26rem;
		margin: 0 auto;
	}
</style>
