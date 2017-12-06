import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/dashboard',
        icon: 'ios-folder',
        name: 'Dashboard',
        title: '首页',
        component: Main,
        children: [
            { path: '/', title: '首页', name: 'Dashboard', component: resolve => { require(['@/views/dashboard/dashboard.vue'], resolve); } }
        ]
    },
    {
        path: '/group',
        icon: 'ios-folder',
        name: 'group',
        title: '高防池',
        component: Main,
        children: [
            {
                path: 'page1',
                icon: 'ios-paper-outline',
                name: '高防IP列表',
                title: '高防IP列表',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'page2',
                icon: 'ios-list-outline',
                name: '释放IP',
                title: '释放IP',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'page3',
                icon: 'ios-list-outline',
                name: 'IP黑白名单',
                title: 'IP黑白名单',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'page4',
                icon: 'ios-list-outline',
                name: '域名黑白名单',
                title: '域名黑白名单',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/group',
        icon: 'ios-folder',
        name: 'group',
        title: '转发池',
        component: Main,
        children: [
            {
                path: 'page1',
                icon: 'ios-paper-outline',
                name: 'LVS节点管理',
                title: 'LVS节点管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'page2',
                icon: 'ios-list-outline',
                name: 'Nginx节点管理',
                title: 'Nginx节点管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'page3',
                icon: 'ios-list-outline',
                name: '转发规则',
                title: '转发规则',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'page4',
                icon: 'ios-list-outline',
                name: '转发流量统计',
                title: '转发流量统计',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/page',
        icon: 'ios-paper',
        title: 'Page',
        name: 'page',
        component: Main,
        children: [
            { path: 'index', title: 'Page', name: 'page_index', component: resolve => { require(['@/views/page/page.vue'], resolve); } }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,  // es6 扩展运算符（ spread ）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
    page500,
    page403,
    page404
];
