// 引入全局样式
import '@/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import  GlobalComponents  from '@/components/index'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//element-ui国际化配置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import router from './router'

import pinia from './stores'

const app = createApp(App)

//element 国际化
app.use(ElementPlus, {
    locale: zhCn,
  })

app.use(createPinia())
app.use(GlobalComponents)
app.use(pinia)
app.use(router)

app.mount('#app')
