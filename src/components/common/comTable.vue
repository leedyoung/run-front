<!-- 表格组件的封装 -->
<template>
	<div>
		<el-table :data="tableData">
			<el-table-column
				v-if="selection"
				type="selection"
				width="55"
				align="center"
			></el-table-column>
			<el-table-column
				v-for="(item, index) in columnData"
				:key="index"
				:label="item.label"
				:min-width="item.minWidth"
				:prop="item.props"
				align="center"
			>
				<template slot-scope="scope">
          <!-- <span v-if="item.render">{{item.render(scope.row)}}</span>
          <slot v-else-if="item.slotName" :name="item.slotName" :scope="scope"></slot> -->
          <span>{{scope.row[item.props]}}</span>
        </template>
				<!-- <template v-else-if="item.operation">
            <el-button
                size="small"
                v-for="(btn, index) in item.btnList"
                :key="index"
                @click="handle"
                > 
                {{btn.label}}
              </el-button>
      </template> -->
			</el-table-column>
			<!-- 操作 -->
			<el-table-column
				v-if="tableOperation.label"
				:label="tableOperation.label"
				:min-width="tableOperation.minWidth"
        align="center"
			>
				<template slot-scope="scope">
					<slot :name="tableOperation.tabel" :scope="scope">
						<el-button
							size="small"
							v-for="(item, index) in tableOperation.btnList"
							:key="index"
              @click="handle(scope.row)"
						>
							{{ item.label }}
						</el-button>
					</slot>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: '',
	props: {
		tableData: {
			type: Array,
			required: true,
			default: () => [],
		},
		columnData: {
			type: Array,
			required: true,
			default: () => [],
		},
		selection: {
			type: Boolean,
			required: true,
			default: false,
		},
		tableOperation: {
			type: Object,
			required: false,
			default: () => {},
		},
		insertImg: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data() {
		return {}
	},

	components: {},

	computed: {},

	methods: {
		handle(row) {
			console.log(row)
		},
	},
	created() {
		// console.log(this.tableData,this.columnData)
	},
}
</script>
<style lang='scss' scoped>
img {
	width: 30px;
	height: 30px;
}
</style>