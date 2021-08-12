import axios from 'axios'

const instance = axios.create({
    baseUrl:'/',
    timeout:30000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

instance.interceptors.request.use(config=>{
    return config
})

instance.interceptors.response.use(res=>{
    if(res.status==200){
        return res.data
    }else{
        if(res.status==-1){
            console.log('返回登录页面')
        }else{
            return Promise.reject(res)
        }
    }
},
error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)