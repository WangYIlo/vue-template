
import { defineStore } from 'pinia'
import {reqLogin} from '@/api/user'

export const useUserStore=defineStore('User',{
      state:()=>{
        return {
          token:''
        }
      },
      actions:{
        async userLogin(data:any){
          const res:any= await reqLogin(data)
          console.log(res);
          
          if(res.data.code===200){
            this.token=res.data.data.token
            return '登陆成功'
          }else{
             throw new Error('用户名或密码错误')
          }
        }
      },
      getters:{

      },
      persist:true
})