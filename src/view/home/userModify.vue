<!-- 用户修改 -->
<template>
  <div>
      <div class="title">账户修改</div>
      <el-row>
          <el-col :span='8'>
          <el-form ref="form" :model="form" label-width="120px" size="medium">
        <el-form-item label="账号名称：">
        <el-input v-model="form.userName"></el-input>
			</el-form-item>
			<el-form-item label="原密码：">
				<el-input v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item label="新密码：">
				<el-input v-model="form.newPsw"></el-input>
			</el-form-item>
			<el-form-item label="联系人：">
				<el-input v-model="form.contactName"></el-input>
			</el-form-item>
			<el-form-item label="联系方式：">
				<el-input v-model="form.tel"></el-input>
			</el-form-item>
			<el-form-item label="账户角色：">
				<el-input v-model="form.role"></el-input>
			</el-form-item>
		</el-form>
      </el-col>
      </el-row>
    <div class="button">
      <el-button type="danger">确认</el-button>
    <el-button type="info">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'',

  data () {
    return {
        form:{
            userName:'',
            password:'',
            newPsw:'',
            contactName:'',
            tel:'',
            role:''
        }
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
@import '@/assets/css/common.scss';
.title{
    margin-bottom: 20px;
}
 .button{
        margin-left:120px;
    }
</style>