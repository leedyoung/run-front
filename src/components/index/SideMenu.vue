<!-- 侧边导航栏 -->
<template>
	<div id="sidemenu">
		<el-menu
			:default-active="path"
			mode='vertical'
            background-color='#F7F7F7'
            router
		>
			<el-menu-item-group v-for="submenu in routes" :key="submenu.name" v-show="!submenu.hide">
                    <template slot="title">
                        <i :class="[submenu.icon,'icon']"></i>
                        <span class="title">{{submenu.type}}</span>
                    </template>
				<el-menu-item  v-for="menuItem in submenu.children" :key='menuItem.name' :index="submenu.path + '/'+menuItem.path">{{menuItem.title}}</el-menu-item>
			</el-menu-item-group>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: '',

	data() {
		return {
		}
	},

	components: {},

	computed: {
		routes(){
			console.log(this.$store.state.routes)
			return this.$store.state.routes
		},
        path(){
            return this.$route.path
        },
	},

	methods: {},
	mounted(){
		console.log(this.$route.path)
	}
}
</script>
<style lang='scss' scoped>
#sidemenu{
	height:100%;
    width:232px;
    border:1px solid rgba(224, 224, 224, 100);
}
.icon{
    font-size: 45px;
    color:#707070;
}
/deep/ .el-menu-item-group__title{
    position: relative;
}
.title{
    width:80px;
    text-align: center;
    height:52px;
    line-height: 52px;
    font-size: 20px;
    position: absolute;
    top:5px;
}
/deep/ .el-menu-item-group{
    // padding-left:20px;
}
.el-menu-item{
    padding-left: 80px !important;
    font-size: 20px !important;
    height:56px;
    line-height: 56px;
}
.el-menu-item:hover{
    outline: 0 !important;
    color: #DB2218 !important;
}
.el-menu-item.is-active {
    color: #fff !important;
    background: #DB2218 !important;
}
</style>