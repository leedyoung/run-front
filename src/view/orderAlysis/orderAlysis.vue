<!-- 订单分析 -->
<template>
	<div class="orderAlysis">
		<!-- <div class="title">订单分析</div> -->
		<card :cardData="order"></card>
		<div class="echart">
			<div class="echart-left">
				<div class="sub-title">各项指标</div>
				<div
					class="left-item"
					v-for="(item, index) in standar"
					:key="index"
				>
					{{ item.name }}: {{ item.value }}
				</div>
			</div>
			<pipe></pipe>
		</div>
	</div>
</template>

<script>
import card from '@/components/common/card.vue'
import pipe from '@/components/orderAlysis/pipe.vue'
export default {
	name: 'orderAlysis',

	data() {
		return {
			order: {
				title: '昨日订单指标',
				data: [
					{
						name: '新增订单',
						value: '100',
					},
					{
						name: '已支付订单',
						value: '1000',
					},
					{
						name: '累计金额',
						value: '100000',
					},
				],
			},
			standar: [
				{
					name: '订单总数',
					value: 10,
				},
				{
					name: '广州-深圳',
					value: 10,
				},
				{
					name: '深圳-东莞',
					value: 10,
				},
				{
					name: '佛山-江门',
					value: 10,
				},
			],
		}
	},

	components: {
		card,
		pipe,
	},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';
.orderAlysis {
	background: #fff;
}
.echart {
	position: relative;
	.echart-left {
    display: flex;
    position: absolute;
    top:150px;
    left:50px;
		flex-direction: column;
		.sub-title {
			color: #000;
			font-size: 18px;
			height: 44px;
      line-height: 44px;
    }
    .left-item{
      height:40px;
      line-height: 40px;
      color:#101010;
      font-size: 16px;
    }
	}
}
</style>