<!-- 圆饼 -->
<template>
	<div>
		<div class="title">
            <span>热门订单路线统计</span>
            <i class="el-icon-arrow-down icon"></i>
        </div>
		<div id="pipe">
        </div>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	props: {
		pipeData: {
			type: Object,
			default: () => {},
		},
	},
	name: '',

	data() {
		return {}
	},
	mounted() {
		let chartDom = document.getElementById('pipe')
		let myChart = echarts.init(chartDom)
		let option

		option = {
			title: {
				text: '热门路线Top3',
                right: '30%',
                top:'5%'
			},
			tooltip: {
				trigger: 'item',
            },
			legend: {
				orient: 'vertical',
                left: '45%',
                top:'30%'
            },
            grid:{
                    left:'8%',
                    right:'0',
                    bottom:'1%',
                    containLabel:true
                },
			series: [
				{
					name: '热点城市',
					type: 'pie',
                    radius: '70%',
                    center:['80%', '50%'],
					data: [
						{ value: 1048, name: '广州' },
						{ value: 735, name: '深圳' },
						{ value: 580, name: '东莞' },
						
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
					},
				},
			],
		}

		option && myChart.setOption(option)
	},
	components: {},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
.title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background:#E0E0E0;
        align-items: center;
        height:78px;
        span{
            width:132px;
            height:44px;
            line-height: 44px;
            color:#000;
            padding-left: 20px;   
        }
    }
#pipe{
    height:389px;
    width:100%;
}
.icon {
        font-size:30px;
        color:#707070;
        padding-right:50px;
    }
</style>