<!-- 订单管理 -->
<template>
	<div>
		<el-form :model="formData" class="demo-form-inline">
			<el-row type="flex">
				<el-col :span="5">
					<el-form-item>
						<el-input
							v-model="formData.telNumb"
							placeholder="请输入订单号"
						></el-input>
					</el-form-item>
				</el-col>
        <el-col :span="1"></el-col>
				<el-col :span="6">
            <el-form-item>
                <el-col :span="3">
                  <el-date-picker
                    v-model="date"
                    type="datetime"
                    placeholder="选择日期时间"
                  >
                  </el-date-picker>
                </el-col>
					</el-form-item>
				</el-col>
				<el-col :span="5">
					<el-form-item label="订单状态：" label-width="100px">
						<el-select v-model="formData.status">
							<el-option
								label="未付款"
								value="未付款"
							></el-option>
							<el-option label="10" value="10"></el-option>
							<el-option label="50" value="50"></el-option>
							<el-option label="100" value="100"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col span="5">        
					<el-form-item label="每页显示：" label-width="100px">
             <el-col :span="18">
                <el-select v-model="formData.pageNum" >
							<el-option label="5" value="5" ></el-option>
							<el-option label="10" value="10" ></el-option>
							<el-option label="50" value="50" ></el-option>
							<el-option label="100" value="100" ></el-option>
						</el-select>
             </el-col>
					</el-form-item>
				</el-col>
        <el-col span="4">
          <el-form-item>
				<el-button type="danger" @click="onSearch">查询</el-button>
			</el-form-item>
        </el-col>
			</el-row>
		</el-form>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column
				prop="date"
				label="用户头像"
				align="center"
				width="180"
			>
				<img src="" alt="" style="width: 50px; height: 50px" />
			</el-table-column>
			<el-table-column prop="name" label="昵称" align="center" width="80">
			</el-table-column>
			<el-table-column prop="address" align="center" label="用户名">
			</el-table-column>
			<el-table-column prop="address" align="center" label="性别">
			</el-table-column>
			<el-table-column prop="address" align="center" label="手机号">
			</el-table-column>
			<el-table-column prop="address" align="center" label="卡券数">
			</el-table-column>
			<el-table-column prop="address" align="center" label="注册时间">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: '',

	data() {
		return {
			formData: {
				teleNum: '',
				pageNum: 5,
				status: '',
				date: '',
			},
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '3',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '3',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '4',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '4',
				},
			],
		}
	},

	components: {},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
</style>