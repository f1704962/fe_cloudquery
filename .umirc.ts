import { defineConfig } from '@umijs/max';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '',
  },
  chainWebpack(memo: any) {
    memo.plugin('monaco-editor').use(MonacoWebpackPlugin, []);
    return memo;
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      // 不展示顶栏
      // headerRender: false,
      // 不展示页脚
      // footerRender: false,
      // 不展示菜单
      // menuRender: false,
      // 不展示菜单顶栏
      // menuHeaderRender: false,
      // 隐藏子菜单
      // hideChildrenInMenu: true,
      // 隐藏自己和子菜单
      // hideInMenu: true,
      // 在面包屑中隐藏
      hideInBreadcrumb: true,
      // 子项往上提，仍旧展示,
      // flatMenu: true,
    },
    {
      name: '数据查询',
      path: '/data-query',
      component: './DataQuery',
    },
    {
      name: '数据变更',
      path: '/data-change',
      component: './DataChange',
    },
    {
      name: '权限控制',
      path: '/permission-controller',
      component: './PermissionController',
    },
  ],
  npmClient: 'npm',
});

