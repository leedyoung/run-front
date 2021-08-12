<!-- 首页 -->
<template>
	<div class="home">
		<el-container>
			<el-header height="100px">
                <Header></Header>
            </el-header>
			<el-container>
				<el-aside width="238px">
						<SideMenu></SideMenu>
                </el-aside>
					<el-main>
                    <keep-alive>
						<div class="body">
							<router-view></router-view>
						</div>
                    </keep-alive>
                </el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
import SideMenu from '@/components/index/SideMenu.vue'
import Header from '@/components/index/Header.vue'
export default {
	name: '',
	data() {
		return {}
	},

	components: {
		SideMenu,
		Header,
	},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
.home{
	height: 100%;
	overflow: hidden;
	.el-aside{
		display: block;
		position: absolute;
		left: 20px;
		top: 120px;
		bottom: 0;
		width: 230px;
		overflow-y: scroll;
		background:#F7F7F7;
	}
	.body {
		position: absolute;
		left: 270px;
		right: 0;
		top: 120px;
		bottom: 0;
		overflow-y: scroll;
		background:#fff;
		padding:20px;
	}
	.el-header{
		padding:0;
	}
}
</style>