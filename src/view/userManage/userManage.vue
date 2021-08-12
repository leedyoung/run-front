<!-- 用户管理 -->
<template>
	<div>
		<el-form :inline="true" :model="formData" class="demo-form-inline">
			<el-form-item>
				<el-input
					v-model="formData.telNumb"
					placeholder="请输入手机号查找"
				></el-input>
			</el-form-item>
			<el-form-item label="每页显示：">
				<el-select v-model="formData.pageNum">
					<el-option label="5" value="5"></el-option>
					<el-option label="10" value="10"></el-option>
					<el-option label="50" value="50"></el-option>
					<el-option label="100" value="100"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="danger" @click="onSearch">查询</el-button>
			</el-form-item>
		</el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      >
      <el-table-column
        prop="date"
        label="用户头像"
        align="center"
        width="180">
        <img src="" alt="" style="width:50px;height:50px;">
      </el-table-column>
      <el-table-column
        prop="name"
        label="昵称"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"

        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"

        label="手机号">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"

        label="卡券数">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"

        label="注册时间">
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
export default {
	name: '',

	data() {
		return {
      formData:{
        telNumb:'',
        pageNum:5
      },
      tableData: [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '3'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '3'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '4'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '4'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '5'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '5'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '6'
          }
          ]
    }
	},

	components: {},

	computed: {},

	methods: {
    onSearch(){
      console.log(1231)
    }
  },
}
</script>
<style lang='scss' scoped>
</style>