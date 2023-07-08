import request from '@/utils/request'

enum API {
    //登录地址
    LOGIN_URL='/user/login',
    //获取用户基本信息
    USERINFO_URL='/user/info',
}

//登录接口
export const reqLogin=(data:any)=>{
    return request({
        method:'post',
        url:API.LOGIN_URL,
        data
    })
}

//获取用户基本信息
export const reqUserInfo=()=>{
    return request({
        url:API.USERINFO_URL
    })
}