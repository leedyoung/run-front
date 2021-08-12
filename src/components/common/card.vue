<!-- 卡片组件 -->
<template>
	<div class="card">
		<div class="title">
            <span>{{cardData.title}}</span>
            <i class="el-icon-info icon"></i>
        </div>
        <div class="detail">
            <div class='detail-item' v-for="(item,index) in cardData.data" :key="index">
                <div class="detail-item-name">{{item.name}}</div>
                <div class="detail-item-value">{{item.value}}</div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	name: '',
	props: {
		title: {
			type: String,
			default: '昨日指标',
		},
		cardData: {
			type: Object,
			default: ()=>{},
		},
	},
	data() {
		return {}
	},

	components: {},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
.card{
    width:100%;
    border-bottom: 1px solid #ccc;
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
    .detail{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 278px;
        .detail-item{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 30px;
            text-align: center;
            padding:0 110px;
            .detail-item-name,.detail-item-value{
                height:80px;
                line-height: 80px;
            }
        }
        .detail-item:not(:last-child){
            border-right: 1px solid #ccc;
        }
    }
}
.icon {
        font-size:30px;
        color:#707070;
        padding-right:50px;
    }
</style>