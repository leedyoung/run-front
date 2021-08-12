<!-- 用户分析 -->
<template>
	<div class="userAnalysis">
		<!-- <div class="title">用户分析</div> -->
    <card :cardData="user"></card>
	</div>
</template>

<script>
import card from '@/components/common/card.vue'
export default {
	name: 'userAlysis',

	data() {
		return {
      user:{
        title:'昨日核心指标',
        data:[
          {
            name:'新注册用户',
            value:'100'
          },
          {
            name:'昨日访问',
            value:'1000'
          },
          {
            name:'累计注册',
            value:'100000'
          }
        ]
      }
    }
	},

	components: {
    card
  },

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';
.userAnalysis {
  width:100%;
  min-height: 493px;
  background:#fff;
	.card {
    .sub_title{
      background: #e0e0e0;

    }
	}
}
</style>