<!-- 平台信息 -->
<template>
	<div class="platformInfo">
		<div class="title">信息修改</div>
		<div class="info">
      <el-form ref="form" :model="form" label-width="120px" size="medium">
        <el-form-item label="平台名称：">
        <el-input v-model="form.platform"></el-input>
			</el-form-item>
			<el-form-item label="合作期限：">
				<el-input v-model="form.timeup"></el-input>
			</el-form-item>
			<el-form-item label="联系人：">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="联系电话：">
				<el-input v-model="form.mobilephone"></el-input>
			</el-form-item>
			<el-form-item label="单笔分成：">
				<el-input v-model="form.money"></el-input>
			</el-form-item>
			<el-form-item label="固定电话：">
				<el-input v-model="form.tel"></el-input>
			</el-form-item>
			<el-form-item label="所属区域：">
				<el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
			</el-form-item>
			<el-form-item label="详情地址：">
				<el-input v-model="form.address" type="textarea"></el-input>
			</el-form-item>
		</el-form>
    <div class="button">
      <el-button type="danger">确认</el-button>
    <el-button type="info">取消</el-button>
    </div>
    </div>
	</div>
</template>

<script>
import { regionData ,CodeToText} from 'element-china-area-data'
export default {
	name: '',

	data() {
		return {
			form: {
				platform: '携程旅行网',
				timeup: '2021-12-24 12:43:23',
				name: '张三丰',
				mobilephone: '123454565699',
				money: '$23423',
				tel: '4000-232-123',
				region: '',
        address: '',
      },
      options:regionData,
      selectedOptions:[]
		}
	},

	components: {
    
  },

	computed: {},

	methods: {
    handleChange (value) {
        this.form.region = value.map(item=>CodeToText[item]).join('')
        console.log(this.form.region) 
       // 可以在这里去处理数据，拿到的是每个区域的区域码然后将这个区域码存入后端。取得时候也是取出区域码
      }
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';
.platformInfo {
	height: 100%;
	.info {
		padding-top: 20px;
	}
  .button{
    margin:15px 0 0 120px;
  }

}
.el-form-item{
  margin-bottom: 10px;
  width:500px;
}
.el-cascader{
  width:380px;
}
/deep/ .el-textarea__inner{
    height: 150px;
    // width:380px;
    // border:1px solid #ccc;
    // color:#E0E0E0 !important;
    // background:#F5F5F5;
    font-size: 14px;
  }
</style>