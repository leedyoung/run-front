<!-- 账户权限 -->
<template>
	<div>
		<div class="title">
        <el-row type="flex" justify="space-between">
          <el-col :span="22">
            账户信息
          </el-col>
          <el-col :span="2">
              <el-button type='danger'>新增账号</el-button>
          </el-col>
        </el-row>
    </div>
		<el-table :data="tableData" style="width: 100%" empty-text="暂无数据">
			<el-table-column prop="date" label="日期" align="center"> </el-table-column>
			<el-table-column prop="name" label="姓名" align="center"> </el-table-column>
			<el-table-column prop="address" label="地址" align="center"> </el-table-column>
			<el-table-column label="操作" width="120px" align="center">
				<template slot-scope="scope">
					<el-button
						@click="handleClick(scope.row)"
						type="text"
						size="small"
						>删除</el-button
					>
					<el-button type="text" size="small" @click="handleModidy(scope.row)">修改</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: 'userAdmin',

	data() {
		return {
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
			],
		}
	},

	components: {},

	computed: {},

	methods: {
    handleClick(){

    },
    handleModidy(row){
      this.$router.push({path:"/home/userModify",params:row})
    }
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';
.title{
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>