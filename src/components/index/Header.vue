<!-- 头部 -->
<template>
	<div id="header">
		<div class="left">
			<div class="logo">
				<img src="" alt="" />
			</div>
			<div class="title">宏润达运输系统管理系统</div>
		</div>
        <div class="right">
            <div class="userInfo">
                <img src="" alt="">
                <span>你的名字</span>
            </div>
            <div class="switch">
                <i class="el-icon-turn-off"></i>
                <span>退出</span>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	name: '',

	data() {
		return {}
	},

	components: {},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
#header{
    height:100px;
    padding:0 20px;
    background:#f8f8f8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    .left{
        width:597px;
        height:100%;
        display: flex;
        flex-direction: row;
        align-items:center;
        .logo{
            width:200px;
            height:70px;
            margin-right: 15px;
            img{
                height:100%;
                width:100%;
            }
        }
        .title{
            color: #F55D54;
            font-size: 32px;
        }
    }
    .right{
        width:338px;
        height:100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .userInfo{
            display: flex;
            flex-direction: row;
            align-items: center;
            height:100%;
            img{
                width:60px;
                height: 60px;
            }
            span{
                height:40px;
                width:161px;
                line-height: 40px;
                text-align: center;
            }
        }
        .switch{
            display: flex;
            flex-direction: row;
            color:#FF5722;
            i{
                font-size: 45px;
            }
            span{
                height:40px;
                line-height: 40px;
                margin-left: 10px;
            }
        }
    }

}
</style>