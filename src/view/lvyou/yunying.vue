<template>
	<div class="yunshi">
		<div id="heart">
			<div id="yunshi_left">
				<li class="iconfont icon-aixin_shixin"></li>
			</div>
			<div id="yunshi_right">
				<span>拥挤度指数</span>
				<Rate allow-half v-model="valueHalf"></Rate>
			</div>
		</div>
		<div id="money">
			<div id="yunshi_left">
				<li class="iconfont icon-qian"></li>
			</div>
			<div id="yunshi_right">
				<span>购票人数</span>
				<Progress :percent="25" status="active"></Progress>
				<span>3000</span>
			</div>
		</div>
		<div id="people">
			<div id="yunshi_left">
				<li class="iconfont icon-renqun"></li>
			</div>
			<div id="yunshi_right">
				<span>入园人数</span>
				<span>共计3000人</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				valueHalf: 2.5
			}
		}
	};
</script>

<style lang="scss" scoped>
	.yunshi {
		display: flex;
		width: 80%;
		height: 1.75rem;
		margin: 0rem auto;
		flex-direction: column;
		justify-content: space-between;
	
	}
	
	#heart {
		display: flex;
		background-color: #20B2AA;
		width: 100%;
		height: 30%;
		border-radius: 0.03rem;
		margin-top: 0.08rem;
	
	}
	
	#money {
		display: flex;
		background-color: #EEC900;
		width: 100%;
		height: 30%;
		border-radius: 0.03rem;
	}
	
	#people {
		display: flex;
		background-color: mediumpurple;
		width: 100%;
		height: 30%;
		border-radius: 0.03rem;
	}
	
	#yunshi_left {
		width: 30%;
		list-style-type: none;
		margin-left: 10%;
		margin-top: -0.05rem;
	}
	
	#yunshi_right {
		width: 60%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		height: 80%;
		margin-top: 0.05rem;
	}
</style>
