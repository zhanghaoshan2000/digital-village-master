<template>
	<div class="lable_card">
		<div class="test test-1">
			<div class="scrollbar">
				<div id="sub_lable_red">
					<span class="font_lable_title">水情红色预警</span>
					<span class="title_cotiner"><img src="../../assets/image/0146be6d294281ac4d27150c640e366.png"
							class="title_img">
						<span class="font_lable_time">2021年9月17日</span>
						<span class="font_lable_time">12:00:00</span></span>
					<span class="title_cotiner2"><img src="../../assets/image/70fb7d5a03812fcacae9cb34565146f.png"
							class="title_img">
						<span class="font_lable_time">浙江省</span></span>
				</div>
				<div id="sub_lable_blue">
					<span class="font_lable_title">水情蓝色预警</span>
					<span class="title_cotiner"><img src="../../assets/image/0146be6d294281ac4d27150c640e366.png"
							class="title_img">
						<span class="font_lable_time">2021年9月17日</span>
						<span class="font_lable_time">12:00:00</span></span>
					<span class="title_cotiner2"><img src="../../assets/image/70fb7d5a03812fcacae9cb34565146f.png"
							class="title_img">
						<span class="font_lable_time">浙江省</span></span>
				</div>
				<div id="sub_lable_orange">
					<span class="font_lable_title">水情橙色预警</span>
					<span class="title_cotiner"><img src="../../assets/image/0146be6d294281ac4d27150c640e366.png"
							class="title_img">
						<span class="font_lable_time">2021年9月17日</span>
						<span class="font_lable_time">12:00:00</span></span>
					<span class="title_cotiner2"><img src="../../assets/image/70fb7d5a03812fcacae9cb34565146f.png"
							class="title_img">
						<span class="font_lable_time">浙江省</span></span>
				</div>
				<div id="sub_lable_yellow">
					<span class="font_lable_title">水情黄色预警</span>
					<span class="title_cotiner"><img src="../../assets/image/0146be6d294281ac4d27150c640e366.png"
							class="title_img">
						<span class="font_lable_time">2021年9月17日</span>
						<span class="font_lable_time">12:00:00</span></span>
					<span class="title_cotiner2"><img src="../../assets/image/70fb7d5a03812fcacae9cb34565146f.png"
							class="title_img">
						<span class="font_lable_time">浙江省</span></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.lable_card {
		display: flex;
		width: 95%;
		margin: 0 auto;
		height: 1.75rem;
		flex-direction: column;
		margin-top: 0.05rem;
	}
	
	#sub_lable_red {
		display: flex;
		width: 100%;
		height: 0.7rem;
		background-color: #CD3700;
		margin-top: 0.07rem;
		flex-direction: column;
		border-radius: 0.05rem;
	}
	
	#sub_lable_blue {
		display: flex;
		width: 100%;
		height: 0.7rem;
		background-color: dodgerblue;
		margin-top: 0.07rem;
		flex-direction: column;
		border-radius: 0.05rem;
		}	
	#sub_lable_orange {
		display: flex;
		width: 100%;
		height: 0.7rem;
		background-color: orangered;
		margin-top: 0.07rem;
		flex-direction: column;
		border-radius: 0.05rem;
	}	
	#sub_lable_yellow {
		display: flex;
		width: 100%;
		height: 0.7rem;
		background-color: orange;
		margin-top: 0.07rem;
		flex-direction: column;
		border-radius: 0.05rem;
	}	
	
	.font_lable_title {
		font-size: 0.11rem;
	}
	
	.font_lable_time {
		display: flex;
		margin-left: 0.01rem;
	}
	
	.title_cotiner {
		display: flex;
		flex-direction: row;
		margin-top: 0.05rem;
	}
	
	.title_cotiner2 {
		display: flex;
		flex-direction: row;
		margin-top: 0.05rem;
	}
	
	.title_img {
		width: 0.13rem;
		height: 0.13rem;
		display: flex;
		margin-left: 0.1rem;
	}
	
	.font_lable_title {
		margin-top: 0.05rem;
	}
	
	.test {
		width: 100%;
		height: 2rem;
		overflow: auto;
		float: left;
		border: none;
		text-indent: 0.2rem;
		font-size: 0.1rem;
	}
	
	.scrollbar {
		width: 100%;
		height: 2.2rem;
	}
	
	.test-1::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 0.1px;
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
</style>
