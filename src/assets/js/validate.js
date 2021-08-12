const chn = /^[\u4e00-\u9fa5]+$/
const eamil = /^[A-Za-z0-9]{6,11}@[A-Za-z]+[.][A-Za-z]{2,4}/
const phone = /^[1][3,4,5,6,7,8,9][0-9]{9}/



const isCHN = (runle,value,callback)=>{
    if(!value){
        callback(new Error('内容不能为空'))
    }else if(!chn.test(value)){
        callback(new Error('请输入中文'))
    }else{
        callback()
    }
}
const isAge = (rule, value, callback) => {
  if (!value) {
    callback(new Error('年龄不能为空'))
  } else {
    callback()
  }
}
const isEmail = (rule, value, callback) => {
  if (!value) {
    callback(new Error('邮件不能为空'))
  } else if (!eamil.test(value)) {
    callback(new Error('请输入正确的邮件'))
  } else {
    callback()
  }
}
const isPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('手机号不能为空'))
  } else if (!phone.test(value)) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
}

module.exports = {
  isAge,
  isEmail,
  isPhone,
  isCHN
}
