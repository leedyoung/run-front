import index from '@/view/index.vue'
export const  dynamic =  [
    {
        path: '/home',
        name: 'home',
        component: index,
        type: '家',
        hide: true,
        children: [
          {
            path: 'index',
            name: 'index',
            meta: {
              title: '首页'
            },
            component: () => import('@/view/home/index.vue')
          },
          {
            path: 'table',
            name: 'table',
            meta: {
              title: '账户修改'
            },
            component: () => import('@/view/home/table.vue')
          }
        ]
      },
    {
        path:'/dataAlysis',
        name: 'dataAlysis',
        component:index,
        type:'统计',
        icon:'el-icon-pie-chart icon',
        children:[
            {
                title:'用户分析',       
                path:'userAlysis',
                name: 'userAlysis',
                component:()=>import('@/view/userAlysis/userAlysis.vue')
            },
            {
                title:'订单分析',
                path:'orderAlysis',
                name: 'orderAlysis',
                component:()=>import('@/view/orderAlysis/orderAlysis.vue')
            }
        ]
    },
    {
        path:'/manage',
        name: 'manage',
        component:index,
        type:'管理',
        icon:'el-icon-folder',
        children:[
            {
                title:'用户管理',
                path:'userManage',
                name: 'userManage',
                component:()=>import('@/view/userManage/userManage.vue')
            },
            {
                title:'订单管理',
                path:'orderManage',
                name: 'orderManage',
                component:()=>import('@/view/orderManage/orderManage.vue')
            },
        ]
    },
    {
        path:'/setting',
        name: 'setting',
        component:index,
        type:'设置',
        icon:'el-icon-folder-opened',
        children:[
            {
                title:'平台信息',
                path:'platformInfo',
                name: 'platformInfo',
                component:()=>import('@/view/platformInfo/platformInfo.vue')
            },
            {
                title:'账号权限',
                path:'userAdmin',
                name: 'userAdmin',
                component:()=>import('@/view/userAdmin/userAdmin.vue')
            }
        ]
    },
]