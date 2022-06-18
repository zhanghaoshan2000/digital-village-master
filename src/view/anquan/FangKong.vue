<template>
	<div class="zaihai">
		<div class="zaihai_content">
			<div id="sub1">
				<div id="title">
				<img src="../../assets/image/5b44fb365cbd494b19277e6ce6c937f.png"  >
				<span class="font_sub">空气温度20C</span>
				</div>
			</div>
			<div id="sub1">
				<div id="title">
				<img src="../../assets/image/2dfdcaf724cae9fa55a9b45a2a3735b.png"  >
				<span class="font_sub">空气湿度36RH</span>
				</div>
			</div>
			<div id="sub1">
				<div id="title">
				<img src="../../assets/image/52904d78ce8e0476f6339c04372a94e.png"  >
				<span class="font_sub">风速8级</span>
				</div>
			</div>
			<div id="sub1">
				<div id="title">
				<img src="../../assets/image/f9dec6879afea81e2678c59bf1c305c.png"  >
				<span class="font_sub">雨量</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.zaihai{
		background-image: url(../../assets/image/9ccd1227141b2e6eb8eb8dc9b8758b9.png);
		width: 96%;
		height: 1.8rem;
		background-size: cover;
		margin: 0 auto;
		margin-top: 0.1rem;
	}
	.zaihai_content{
		
		width: 50%;
		height: 1.8rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	#sub1{
		background-color: rgba(0,0,0,0.5);
		width: 100%;
		height: 0.35rem;
		border-radius: 0.05rem;
		justify-content: space-between;
		display: flex;
	}
	#sub1 img{
		display: flex;
		width: 0.21rem;
		height: 0.22rem;
		margin-left: 0.1rem;
		margin-top: 0.06rem;
	}
	#title{
		display: flex;
		
	}
	.font_sub{
		margin-left: 0.1rem;
		margin-top: 0.1rem;
		font-size: 0.11rem;
	}
</style>
