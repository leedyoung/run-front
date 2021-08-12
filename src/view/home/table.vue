<!--  -->
<template>
	<div>
		<comTable
			:tableData="tableData"
			:columnData="columnData"
			:selection="true"
			:tableOperation="tableOperation"
		>
		</comTable>
	</div>
</template>

<script>
import comTable from '@/components/common/comTable.vue'
export default {
	name: '',

	data() {
		return {
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '家',
					avater: '',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333,
					tag: '公司',
					avater: '',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333,
					tag: '家',
					avater: '',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333,
					tag: '公司',
					avater: '',
				},
			],
			columnData: [
				{
					label: '日期',
					props: 'date',
					isImg: false,
					operation: false,
				},
				{
					label: '姓名',
					props: 'name',
					isImg: false,
					operation: false,
				},
				{
					label: '省份',
					props: 'province',
					isImg: false,
					operation: false,
				},
				{
					label: '区域',
					props: 'city',
					isImg: false,
					operation: false,
				},
				{
					label: '地址',
					props: 'address',
					isImg: false,
					operation: false,
				},
				{
					label: '编码',
					props: 'zip',
					isImg: false,
					operation: false,
				},
				{
					label: '标签',
					props: 'tag',
					isImg: false,
					operation: false,
				},
				{
					label: '头像',
					props: 'avater',
					isImg: true,
					operation: false,
				},
			],
			tableOperation: {
				label: '操作',
				param: 'operate',
				childDefault: false,
				minWidth:'120px',
				btnList: [
					{
						label: '编辑',
						type: 'edit',
					},
					{
						label: '删除',
						type: 'del',
					},
				],
			},
		}
	},

	components: {
		comTable,
	},

	computed: {},

	methods: {},
}
</script>
<style lang='scss' scoped>
</style>