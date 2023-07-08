import axios from 'axios'
import { ElMessage } from 'element-plus'

let request=axios.create({
    baseURL: '/api',
    timeout: 5000,
});


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
 
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    //处理网络错误
    let msg=''
    let status=error.response.status
    switch(status){
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";
    }
    ElMessage.error(msg)
    return Promise.reject(error);
  });


  export default request