import Layout from '@/layout/index.vue'

export const constantRoute=[
    {
        path:'/login',
        component:()=>import('@/views/login/index.vue'),
        name:'login',
        meta:{
            title:'登录',
            hidden:true
        }
    },
    {
        path:'/',
        component:Layout,
        name:'layout',
        redirect: '/home',
        children:[
            {
                path:'/home',
                component:()=>import('@/views/home/index.vue'),
                name:'home',
                meta:{
                    title:'首页',
                    icon:'home'
                }
            }
        ]
    },
    {
        path: '/nested',
        component:Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
          title: '多级菜单',
          icon:'menu'
        },
        children: [
          {
            path: '/nested/menu1',
            component: () => import('@/views/nested/menu1/index.vue'), 
            name: 'Menu1',
            meta: { title: '菜单1',
            icon:'menu' },
            redirect:'/nested/menu1/menu1-1',
            children: [
              {
                path: '/nested/menu1/menu1-1',
                component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
                name: 'Menu1-1',
                meta: { title: '菜单1-1'}
              },
              {
                path: '/nested/menu1/menu1-2',
                component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
                name: 'Menu1-2',
                meta: { title: '菜单1-2' },
              }
             ]
          },
          {
            path: '/nested/menu2',
            component: () => import('@/views/nested/menu2/index.vue'),
            name: 'Menu2',
            meta: { title: '菜单2' }
          }
        ]
    },
    {
      path:'/form',
      component:Layout,
      children:[
        {
            path:'/form/index',
            component:()=>import('@/views/form/index.vue'),
            name:'Form',
            meta:{
                title:'表单',
                icon:'form'
            }
        }
    ]
    },
    {
      path:'/expamle',
      component:Layout,
      name:'Example',
      meta:{
        title:'例子',
        icon:'example'
      },
      children:[
        {
            path:'/expamle/tabel',
            component:()=>import('@/views/tabel/index.vue'),
            name:'Tabel',
            meta:{
                title:'表格',
                icon:'tabel'
            }
        },
        {
          path:'/expamle/tree',
          component:()=>import('@/views/tree/index.vue'),
          name:'Tree',
          meta:{
              title:'树',
              icon:'tree'
          }
      },

    ]
    },
    {
        path: '/:pathMatch(.*)*',
        component:()=>import('@/views/404.vue'),
        name:'404',
        meta:{
            title:'404',
            hidden:true
        }
    }
]