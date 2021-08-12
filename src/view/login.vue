<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">宏润达后台管理系统</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="请输入帐号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="param.password" @keyup.enter.native="submitForm()"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row type="flex">
            <!-- <el-col>
              <el-input type="text" placeholder="请输入验证码" v-model="param.code" @keyup.enter.native="submitForm()"></el-input>
            </el-col> -->
            <!-- <el-col>
              <img id="captchaImg" :src="captchaImgUrl" @click="freshCaptcha" border="0" alt="点击刷新验证码" style="cursor: pointer; height: 40px; width: 150px; margin-left: 10px;" align="absmiddle" />
            </el-col> -->
          </el-row>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { accessMenu } from '@/api/modules/app.js'
// import {isEmail,isPhone} from '@/assets/js/validate.js'

export default {
  name: 'login',
  data() {
    return {
      param: {
        username: '',
        password: '',
        code: '',
      },
      // rules: {
      //   username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      //   password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      //   code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      // },

      rules:{
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      captchaImgUrl: '',
    }
  },
  created() {
  //   this.navToHomeIfIsLogin()
  //   this.freshCaptcha()
  //   this.param.username = localStorage.getItem('ms_username') || ''
  },
  methods: {
  //   navToHomeIfIsLogin() {
  //     accessMenu().then((res) => {
  //       this.navToHomePage()
  //     })
  //   },
  //   navToHomePage() {
  //     this.$router.push('/home/index')
  //   },
    freshCaptcha() {
      const timenow = new Date().getTime()
      this.captchaImgUrl = `/api/index/getVerify?${timenow}`
    },
    submitForm() {
      this.$router.push({path:'home/index'})
      this.$refs.login.validate((valid) => {
        if (valid) {
          // this.$api.login(this.param).then((res) => {
          //   this.$message.success(res.msg)
          //   localStorage.setItem('ms_username', this.param.username)
          //   setTimeout(() => {
          //     // this.navToHomePage()
          //   }, 300)
          // }).catch(err => {
          //   this.$message.error(err.msg)
          //   this.freshCaptcha()
          // })
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/image/run.jpeg);
  background-size: cover;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #FFF;
  border-bottom: 1px solid #DDD;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 395px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(255, 255, 255, .3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #FFF;
}
</style>
